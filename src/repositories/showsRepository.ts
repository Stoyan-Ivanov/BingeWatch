import type TVShow from "@/models/tvShow";
import type { TVShowDetails } from "@/models/tvShowDetails";

const baseUrl = "https://api.tvmaze.com";

export default {
  /**
   * 🚀 Fetches all the TV shows from the API
   * @returns an array of formatted TV Shows ({@link TVShow})
   */
  async getTVShows(): Promise<TVShow[]> {
    const response = await fetch(`${baseUrl}/shows`, {
      method: "GET",
    });

    const data: any[] = await response.json();

    const formattedTVShows = data
      .filter((rawShow: any) => {
        return (
          rawShow.id &&
          rawShow.name &&
          rawShow.summary &&
          rawShow.premiered &&
          rawShow.genres &&
          rawShow.averageRuntime &&
          rawShow.rating &&
          rawShow.rating.average &&
          rawShow.officialSite &&
          rawShow.image
        );
      })
      .map<TVShow>((rawShow: any) => {
        return {
          id: rawShow.id,
          name: rawShow.name,
          summary: rawShow.summary,
          premiered: rawShow.premiered,
          genres: rawShow.genres,
          averageRuntimeMinutes: rawShow.averageRuntime,
          averageRating: rawShow.rating.average,
          officialWebsite: rawShow.officialSite,
          image: rawShow.image,
        };
      });
      
    return formattedTVShows;
  },

  /**
   * 🚀 Fetches the details of a specific TV show
   * @returns a wrapper object for TV show details
   */
  async getTVShowDetails(id: number): Promise<TVShowDetails> {
    const response = await fetch(
      `${baseUrl}/shows/${id}?embed[]=episodes&embed[]=cast`,
      {
        method: "GET",
      }
    );

    const data: any = await response.json();

    return {
      cast: Array.from(
        new Set(
          data._embedded.cast.map((rawActor: any) => {
            return {
              name: rawActor.person.name,
              image: rawActor.person.image,
            };
          })
        )
      ),
      seasonsCount:
        data._embedded.episodes[data._embedded.episodes.length - 1].season,
    };
  },
};
