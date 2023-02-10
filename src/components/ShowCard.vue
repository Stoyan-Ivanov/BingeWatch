<script setup lang="ts">
import { IconStarFilled } from "@tabler/icons-vue";

defineProps<{
  id: number;
  name: string;
  premiered: string;
  rating: number;
  imageUrl: string;
}>();
</script>

<template>
  <a
    :href="'/' + id"
    class="duration-50 relative h-full cursor-pointer overflow-hidden rounded-3xl bg-component transition active:scale-95"
  >
    <img
      class="absolute h-full w-full object-cover"
      :src="imageUrl"
      :alt="name"
    />
    <div
      class="absolute h-full w-full bg-gradient-to-t from-base to-transparent opacity-80 transition-opacity duration-150 hover:opacity-40"
    />

    <div
      class="pointer-events-none relative flex h-full w-full flex-col place-items-start justify-between px-4 py-5"
    >
      <div
        class="flex flex-row items-center rounded-full bg-base py-0.5 pl-2 pr-3"
      >
        <IconStarFilled class="h-3 w-3 text-yellow-500" />
        <span class="ml-1 text-sm font-bold text-white">
          {{ rating.toFixed(1) }}
        </span>
      </div>

      <div class="flex flex-col">
        <p class="text-lg font-bold text-white">{{ name }}</p>
        <p class="text-sm font-semibold text-gray-300">
          {{ new Date(premiered).getFullYear() }}
        </p>
      </div>
    </div>
  </a>
</template>
