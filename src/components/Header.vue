<script setup lang="ts">
import { useTVShowsStore } from "@/stores/useTVShowsStore";
import Dropdown from "./kit/Dropdown.vue";
import SearchBar from "./SearchBar.vue";

/**
 * 🗃 Local storage for storing and handling TV shows
 */
const tvShowsStore = useTVShowsStore();

</script>

<template>
  <div class="sticky top-0 z-10 flex w-full flex-row justify-center bg-base">
    <div
      class="container grid grid-cols-1 items-center justify-between gap-6 py-7 md:grid-cols-2 md:gap-2 md:py-5 md:px-0 lg:gap-20"
    >
      <div class="flex flex-col">
        <div class="flex flex-row items-center justify-between">
          <RouterLink
            class="title-font flex items-center font-medium active:scale-95"
            to="/"
          >
            <img
              class="w-56"
              src="@/assets/images/logo-full.svg"
              alt="BingeWatch logo"
            />
          </RouterLink>

          <Dropdown
            label="Categories"
            :options="new Map(Array.from(tvShowsStore.tvShowsPerCategory.keys()).map((category: string) => [category, `/#section-${category.toLowerCase()}`]))"
          />
        </div>
      </div>

      <div class="flex flex-col">
        <SearchBar class="h-12" />
      </div>
    </div>
  </div>
</template>
