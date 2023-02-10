<script setup lang="ts">
defineProps<{
  name: string;
  showName: string | undefined;
  imageUrl: string;
}>();
</script>

<template>
  <a
    class="duration-50 relative h-full w-full overflow-hidden rounded-3xl bg-component transition active:scale-95"
    :href="`https://www.google.com/search?q=${name} from ${showName}`"
    target="_blank"
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
      class="pointer-events-none relative flex h-full w-full flex-col justify-end px-6 py-5"
    >
      <div class="flex flex-col text-center">
        <p class="text-lg font-bold text-white">{{ name }}</p>
      </div>
    </div>
  </a>
</template>
