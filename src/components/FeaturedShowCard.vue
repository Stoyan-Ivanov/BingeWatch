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
  <RouterLink
    :to="'/' + id"
    class="duration-50 relative h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-component shadow-lg shadow-neutral-800 transition active:scale-95"
  >
    <img
      class="absolute h-full w-full object-cover"
      :src="imageUrl"
      :alt="name"
    />
    <div
      class="absolute h-full w-full bg-gradient-to-t from-base to-transparent opacity-90 transition-opacity duration-150 hover:opacity-40"
    />

    <div
      class="pointer-events-none relative flex h-full w-full flex-col place-items-start justify-between px-8 py-8"
    >
      <div
        class="flex flex-row items-center rounded-full bg-base py-1 pl-3 pr-4"
      >
        <IconStarFilled class="h-5 w-5 text-accent" />
        <span class="ml-2 text-xl font-bold text-white">
          {{ rating.toFixed(1) }}
        </span>
      </div>

      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-grow flex-col">
          <p class="text-3xl font-bold text-white">{{ name }}</p>
          <p class="text-2xl font-medium text-gray-300">
            {{ new Date(premiered).getFullYear() }}
          </p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
