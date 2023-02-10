import { type Ref, ref, type ComputedRef, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import type TVShow from "@/models/tvShow";
import tvShowRepository from "@/repositories/showsRepository";
import { randomIntFromInterval } from "@/utils/randomNumberUtils";

export const useTVShowsStore = defineStore(
  "tvShows",
  () => {
    /**
     * 📦 The locally stored TV shows
     */
    const tvShows: Ref<TVShow[]> = ref([]);

    /**
     * 📦 The TV shows divided by category
     */
    const tvShowsPerCategory: ComputedRef<Map<string, TVShow[]>> = computed(
      () => {
        let temp: any = {};

        tvShows.value.forEach((tvShow: TVShow) => {
          tvShow.genres.forEach((genre: string) => {
            if (temp[genre]) {
              temp[genre].push(tvShow);
            } else {
              temp[genre] = [tvShow];
            }
          });
        });

        Object.entries(temp).forEach(([genre, tvShows]) => {
          if ((tvShows as TVShow[]).length < 10) {
            delete temp[genre];
          } else {
            temp[genre] = temp[genre].sort(
              (a: TVShow, b: TVShow) => b.averageRating - a.averageRating
            );
          }
        });

        return new Map(Object.entries(temp));
      }
    );

    /**
     * 📦 Gets 2 random TV shows from the TV show list
     */
    const twoRandomShows: ComputedRef<TVShow[]> = computed(() => {
      const randomNum = randomIntFromInterval(0, tvShows.value.length - 1);
      return new Array<TVShow>(
        tvShows.value[randomNum],
        tvShows.value[randomNum + 1]
      );
    });

    /**
     * 📦 The top 10 TV shows based average rating
     */
    const topTVShows: ComputedRef<TVShow[]> = computed(() =>
      tvShows.value
        .sort((a: TVShow, b: TVShow) => b.averageRating - a.averageRating)
        .slice(0, 10)
    );

    /**
     * 🚀 Fetches all the available TV shows from the API repository
     */
    async function fetchTVShows() {
      tvShows.value = await tvShowRepository.getTVShows();
    }

    /**
     * @param id - the ID of the show which should be returned
     * @returns a TV show by ID
     */
    function getTVShowById(id: number) {
      return tvShows.value.find((tvShow: TVShow) => tvShow.id == id);
    }

    /**
     * Functionality to find the most similar shows to a selected show
     * @param id - the ID of the show for which similar shows should be returned
     * @returns an array of similar TV shows
     */
    function getSimilarShows(id: number): Array<TVShow> {
      const similarShowsGoal = 20;
      const currentTVShow: TVShow | undefined = tvShows.value.find(
        (tvShow: TVShow) => tvShow.id == id
      );

      if (!currentTVShow) {
        return [];
      }

      const similarTVShows: TVShow[] = [];

      for (
        let genresIndex = currentTVShow.genres.length;
        genresIndex > 0;
        genresIndex--
      ) {
        const genresToLookFor = currentTVShow.genres.slice(0, genresIndex);

        const tvShowsOfTheIteration = tvShows.value.filter((tvShow: TVShow) => {
          return (
            tvShow.genres.filter((genre: string) =>
              genresToLookFor.includes(genre)
            ).length == genresToLookFor.length
          );
        });

        similarTVShows.push(...tvShowsOfTheIteration);

        if (similarTVShows.length > similarShowsGoal) {
          break;
        }
      }
      return Array.from(new Set(similarTVShows))
        .filter((show: TVShow) => show.name != currentTVShow.name)
        .slice(0, similarShowsGoal);
    }

    onMounted(fetchTVShows);

    return {
      tvShows,
      tvShowsPerCategory,
      twoRandomShows,
      topTVShows,
      getTVShowById,
      getSimilarShows,
    };
  },
  { persist: true }
);
