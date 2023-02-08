<template>
  <RouterLink
    to="/1"
    class="relative h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-component transition duration-50 active:scale-95"
  >
    <img
      class="absolute h-full w-full object-cover"
      src="https://static.tvmaze.com/uploads/images/medium_portrait/444/1112175.jpg"
    />
    <div
      class="absolute h-full w-full bg-gradient-to-t from-base to-transparent opacity-80 transition-opacity duration-150 hover:opacity-40"
    />

    <div
      class="pointer-events-none relative flex h-full w-full flex-col place-items-start justify-between px-6 py-5"
    >
      <div
        class="flex flex-row items-center rounded-full bg-base py-0.5 pl-2 pr-3"
      >
        <StarIcon class="h-3 w-3 text-yellow-500" />
        <span class="ml-1 text-sm font-bold text-white">7.5</span>
      </div>

      <div class="flex flex-col">
        <p class="text-lg font-bold text-white">The Flash</p>
        <p class="text-sm font-medium text-gray-300">5 seasons</p>
      </div>
    </div>
  </RouterLink>
</template>
