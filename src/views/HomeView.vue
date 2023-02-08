<script setup lang="ts">
import ShowCard from "@/components/ShowCard.vue";
</script>

<template>
  <container class="container">
    <section>
      <div class="flex h-96 flex-col">
        <!-- <ShowCard /> -->
        <div class="h-96 w-full rounded-3xl bg-component"></div>
      </div>
    </section>

    <section class="mt-16">
      <div class="flex flex-row items-center">
        <FlameIcon class="text-primary" />
        <span class="ml-2 text-xl font-semibold text-white">Trending</span>
      </div>
      <div class="mt-5 grid h-60 grid-cols-5 gap-4">
        <ShowCard v-for="i in 5" />
      </div>
    </section>

    <section class="mt-16">
      <div class="flex flex-row items-center">
        <StarIcon class="h-5 w-5 text-yellow-500" />
        <span class="ml-2 text-xl font-semibold text-white">Top Rated</span>
      </div>
      <div class="mt-5 grid h-60 grid-cols-5 gap-4">
        <ShowCard v-for="i in 5" />
      </div>
    </section>

    <section class="mt-16">
      <div class="text-xl font-semibold text-white">Dramas</div>
      <div class="mt-5 grid h-60 grid-cols-5 gap-4">
        <ShowCard v-for="i in 5" />
      </div>
    </section>
  </container>
</template>
