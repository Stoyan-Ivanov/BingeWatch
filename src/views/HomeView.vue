<script setup lang="ts">
import FeaturedShowCard from "@/components/FeaturedShowCard.vue";
import ShowCard from "@/components/ShowCard.vue";
import HorizontalScrollContainer from "@/components/kit/HorizontalScrollContainer.vue";
import ContentSection from "@/components/kit/ContentSection.vue";
import { useTVShowsStore } from "@/stores/useTVShowsStore";
import { IconStarFilled } from "@tabler/icons-vue";

/**
 * 🗃 Local storage for storing and handling TV shows
 */
const tvShowsStore = useTVShowsStore();
</script>

<template>
  <container class="container">
    <section class="hidden sm:block">
      <div class="flex h-64 flex-row gap-4 md:h-72 md:gap-10 lg:h-96">
        <FeaturedShowCard
          v-for="tvShow in tvShowsStore.twoRandomShows"
          :key="tvShow.name"
          :id="tvShow.id"
          :name="tvShow.name"
          :premiered="tvShow.premiered"
          :rating="tvShow.averageRating"
          :image-url="tvShow.image.original"
        />
      </div>
    </section>

    <ContentSection id="section-top-rated">
      <div class="flex flex-row items-center">
        <IconStarFilled class="h-5 w-5 text-accent" />
        <span class="ml-2 text-xl font-semibold text-white">Top Rated</span>
      </div>
      <div class="mt-5 overflow-x-auto whitespace-nowrap pb-4">
        <ShowCard
          class="mx-2 inline-flex h-60 w-48 shadow-lg"
          v-for="tvShow in tvShowsStore.topTVShows"
          :key="tvShow.name"
          :id="tvShow.id"
          :name="tvShow.name"
          :premiered="tvShow.premiered"
          :rating="tvShow.averageRating"
          :image-url="tvShow.image.medium"
        />
      </div>
    </ContentSection>

    <ContentSection
      v-for="[genre, tvShows] in tvShowsStore.tvShowsPerCategory.entries()"
      :key="genre"
      :id="`section-${genre.toLowerCase()}`"
    >
      <div class="text-xl font-semibold text-white">{{ genre }}</div>
      <HorizontalScrollContainer class="mt-5">
        <ShowCard
          class="mx-2 inline-flex h-60 w-48 shadow-lg"
          v-for="tvShow in tvShows"
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
