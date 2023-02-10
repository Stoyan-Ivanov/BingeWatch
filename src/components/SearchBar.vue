<script setup lang="ts">
import type TVShow from "@/models/tvShow";
import { useTVShowsStore } from "@/stores/useTVShowsStore";
import { computed, ref, watchEffect, type ComputedRef, type Ref } from "vue";
import { IconSearch, IconCircleX, IconStarFilled } from "@tabler/icons-vue";

/**
 * 🗃 Local storage for storing and handling TV shows
 */
const tvShowsStore = useTVShowsStore();

/**
 * 📇 Reference for the components input field
 */
const inputField = ref(null);

/**
 * 📦 The currently selected / inputted string
 */
const search: Ref<string> = ref("");

/**
 * 📦 All of the available TV shows
 */
const tvShows: ComputedRef<TVShow[]> = computed(() => tvShowsStore.tvShows);

/**
 * 🚩 Flag for whether the popup dropdown should be shown for autocompletion
 */
const showPopup: Ref<boolean> = ref(false);

/**
 * 🏗 TV shows filtered based on the inputted string
 */
const filteredResults: ComputedRef<TVShow[]> = computed(() =>
  tvShows.value.filter((tvShow: TVShow) =>
    tvShow.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

/**
 * 👀 Watcher for changes in the search string
 */
watchEffect(() => {
  // Show popup if entered string doesn't fully match with an option
  if (search.value !== "") {
    showPopup.value = true;
  }
});

/**
 * 🔨 Focuses on the search field element
 */
function focusInputField() {
  (inputField.value as any).focus();
  showPopup.value = true;
}
</script>

<template>
  <div class="relative">
    <!-- Input field-->
    <div
      class="flex h-full flex-row items-center rounded-full bg-component px-6 transition-colors duration-150 hover:bg-componentHover"
      @click="focusInputField()"
    >
      <IconSearch class="w-min-8 h-min-8 text-white" />
      <input
        ref="inputField"
        class="ml-3 flex-grow bg-transparent text-white outline-none"
        placeholder="Search series"
        v-model.trim="search"
      />
      <IconCircleX
        v-show="search.length > 0"
        class="w-min-8 h-min-8 cursor-pointer text-white transition-all duration-150"
        @click="
          search = '';
          focusInputField();
        "
      />
    </div>

    <!-- Dropdown popup -->
    <div
      v-show="showPopup"
      class="absolute z-10 mt-2 flex max-h-72 w-full flex-col overflow-y-auto overflow-x-hidden rounded-lg bg-component shadow-lg transition duration-150"
      v-click-away="() => (showPopup = false)"
    >
      <!-- Dropdown options -->
      <a
        v-if="filteredResults.length > 0"
        v-for="tvShowResult in filteredResults"
        class="flex h-28 flex-row rounded-sm px-4 py-3 hover:bg-componentHover"
        :href="'/' + tvShowResult.id"
      >
        <img
          class="w-20 rounded-md object-cover"
          :src="tvShowResult.image.medium"
          :alt="tvShowResult.name"
        />

        <div class="ml-4 flex flex-col">
          <div class="flex flex-row items-center gap-2">
            <span
              class="flex h-5 flex-row items-center rounded-full bg-base px-2"
            >
              <IconStarFilled class="h-2 w-2 text-accent" />
              <p class="ml-1 text-xs font-medium text-white">
                {{ tvShowResult.averageRating.toFixed(1) }}
              </p>
            </span>
            <p class="text-lg text-white">{{ tvShowResult.name }}</p>
          </div>

          <div class="text-md flex flex-row items-center gap-1 text-secondary">
            <span>
              {{
                new Date(
                  tvShowResult ? tvShowResult.premiered : ""
                ).getFullYear()
              }}
            </span>
            <span class="h-1 w-1 rounded-full bg-secondary" />
            <span>{{ tvShowResult?.averageRuntimeMinutes }}m</span>
          </div>

          <div class="mt-2 flex flex-row gap-2">
            <span
              v-for="genre in tvShowResult?.genres"
              :key="genre"
              class="text-ellipsis whitespace-nowrap rounded-md border px-2 text-xs text-gray-300"
            >
              {{ genre }}
            </span>
          </div>
        </div>
      </a>

      <!-- Fallback -->
      <div
        v-else
        class="flex h-16 flex-row items-center justify-center py-2 px-2 text-sm text-secondary"
      >
        No Results Found...
      </div>
    </div>
  </div>
</template>
