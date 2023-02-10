<script setup lang="ts">
import ShowCard from "@/components/ShowCard.vue";
import HorizontalScrollContainer from "@/components/kit/HorizontalScrollContainer.vue";
import ContentSection from "@/components/kit/ContentSection.vue";
import type TVShow from "@/models/tvShow";
import type { TVShowDetails } from "@/models/tvShowDetails";
import showsRepository from "@/repositories/showsRepository";
import { useTVShowsStore } from "@/stores/useTVShowsStore";
import { computed, onMounted, ref, type ComputedRef, type Ref } from "vue";
import ActorCard from "@/components/ActorCard.vue";
import { IconStarFilled, IconArrowUpRight } from "@tabler/icons-vue";

const { id } = defineProps<{
  id: number;
}>();

/**
 * 🗃 Local storage for storing and handling TV shows
 */
const tvShowsStore = useTVShowsStore();

/**
 * 📦 The TV show for the passed TV show ID
 */
const tvShow: ComputedRef<TVShow | undefined> = computed(() =>
  tvShowsStore.getTVShowById(id)
);

/**
 * 📦 The current TV show's details
 */
const tvShowDetails: Ref<TVShowDetails | null> = ref(null);

onMounted(async () => {
  // Fetch details for a specific ID
  tvShowDetails.value = await showsRepository.getTVShowDetails(id);
});
</script>

<template>
  <container class="container">
    <section>
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div class="flex flex-row justify-center">
          <div
            class="relative h-full w-full overflow-hidden rounded-3xl bg-component"
            style="min-height: 540px"
          >
            <img
              class="absolute h-full w-full object-cover"
              :src="tvShow?.image.original"
              :alt="tvShow?.name"
            />
          </div>
        </div>
        <div class="mt-3 flex flex-col place-items-start">
          <div
            class="flex flex-row items-center rounded-r-full rounded-tl-full bg-component py-1 pr-3 pl-2"
          >
            <IconStarFilled class="h-4 w-4 text-accent" />
            <p class="ml-2 text-lg font-bold text-white md:text-xl">
              {{ tvShow?.averageRating.toFixed(1) }}
            </p>
          </div>

          <p class="mt-2 text-3xl font-bold text-white md:text-4xl">
            {{ tvShow?.name }}
          </p>

          <div class="mt-1 flex flex-row items-center gap-2 text-secondary">
            <span>
              {{ new Date(tvShow ? tvShow.premiered : "").getFullYear() }}
            </span>
            <span class="h-1 w-1 rounded-full bg-secondary" />
            <span>{{ tvShow?.averageRuntimeMinutes }}m</span>
            <span class="h-1 w-1 rounded-full bg-secondary" />
            <span>{{ tvShowDetails?.seasonsCount }} seasons</span>
          </div>

          <div class="mt-3 flex flex-row gap-3">
            <span
              v-for="genre in tvShow?.genres"
              :key="genre"
              class="rounded-lg border px-4 py-1 text-sm text-white"
            >
              {{ genre }}
            </span>
          </div>

          <p
            class="md:text-md mt-5 text-sm text-gray-400"
            v-html="tvShow?.summary"
          />

          <a
            :href="tvShow?.officialWebsite"
            target="_blank"
            class="button mt-6 flex h-10 flex-row items-center rounded-full border border-primary px-5 text-primary transition-colors duration-150 hover:bg-primary hover:text-white active:scale-95"
          >
            <span>Official Website</span>
            <IconArrowUpRight class="ml-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <p class="text-xl font-semibold text-white">{{ tvShow?.name }} Cast</p>

      <div class="mt-5 grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-6">
        <ActorCard
          class="h-48 md:h-56"
          v-for="actor in tvShowDetails?.cast"
          :key="actor.name"
          :name="actor.name"
          :showName="tvShow?.name"
          :imageUrl="actor.image.medium"
        />
      </div>
    </section>

    <ContentSection>
      <p class="text-xl font-semibold text-white">You might also like</p>

      <HorizontalScrollContainer class="mt-5">
        <ShowCard
          class="mx-2 inline-flex h-60 w-48 shadow-lg"
          v-for="tvShow in tvShowsStore.getSimilarShows(id)"
          :key="tvShow.name"
          :id="tvShow.id"
          :name="tvShow.name"
          :premiered="tvShow.premiered"
          :rating="tvShow.averageRating"
          :image-url="tvShow.image.medium"
        />
      </HorizontalScrollContainer>
    </ContentSection>
  </container>
</template>
