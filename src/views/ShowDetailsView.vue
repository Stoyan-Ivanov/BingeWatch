<script setup lang="ts">
import ShowCard from "@/components/ShowCard.vue";
</script>

<template>
  <container class="container">
    <section>
      <div class="grid grid-cols-2 gap-20">
        <div class="flex flex-row justify-center">
          <div
            class="relative h-96 w-full overflow-hidden rounded-3xl bg-component"
          >
            <img
              class="absolute h-full w-full object-fill"
              src="https://static.tvmaze.com/uploads/images/medium_portrait/444/1112175.jpg"
            />
          </div>
        </div>
        <div class="mt-3 flex flex-col place-items-start">
          <div
            class="flex flex-row items-center rounded-r-full rounded-tl-full bg-component py-1 pr-3 pl-2"
          >
            <StarIcon class="h-4 w-4 text-yellow-500" />
            <p class="ml-2 text-xl font-bold text-white">7.5</p>
          </div>

          <p class="mt-2 text-4xl font-bold text-white">The Flash</p>

          <div class="mt-1 flex flex-row items-center gap-2 text-gray-500">
            <span>2010</span>
            <span class="h-1 w-1 rounded-full bg-gray-500" />
            <span>60m</span>
            <span class="h-1 w-1 rounded-full bg-gray-500" />
            <span>5 seasons</span>
          </div>

          <div class="mt-3 flex flex-row gap-3">
            <span
              v-for="i in 3"
              class="rounded-lg border px-4 py-1 text-sm text-white"
            >
              Horror
            </span>
          </div>

          <p class="mt-5 text-gray-400">
            <b>Under the Dome</b> is the story of a small town that is suddenly
            and inexplicably sealed off from the rest of the world by an
            enormous transparent dome. The town's inhabitants must deal with
            surviving the post-apocalyptic conditions while searching for
            answers about the dome, where it came from and if and when it will
            go away.
          </p>

          <button
            class="mt-6 flex h-10 flex-row items-center rounded-full border border-primary px-5 text-primary transition-colors duration-150 hover:bg-primary hover:text-white active:scale-95"
          >
            <span>Official Website</span>
            <ArrowUpRightIcon class="ml-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>

    <section class="mt-16">
      <p class="text-xl font-semibold text-white">Cast</p>

      <div class="mt-5 grid h-60 grid-cols-5 gap-4">
        <div v-for="i in 5" class="relative w-full rounded-3xl bg-component" />
      </div>
    </section>

    <section class="mt-16">
      <p class="text-xl font-semibold text-white">You might also like</p>

      <div class="mt-5 grid h-60 grid-cols-5 gap-4">
        <ShowCard v-for="i in 5" />
      </div>
    </section>
  </container>
</template>
