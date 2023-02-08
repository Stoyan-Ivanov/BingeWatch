<template>
  <div class="sticky top-0 z-10 flex w-full flex-row justify-center bg-base">
    <div
      class="container flex flex-row items-center justify-between space-x-20 py-5 md:px-0"
    >
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

      <div class="flex flex-row justify-between space-x-20">
        <div class="flex flex-row">
          <FlameIcon class="text-primary" />
          <span class="ml-1 text-white">Trending</span>
        </div>
        <div class="text-white">Categories</div>
      </div>

      <div
        class="flex h-12 w-1/4 flex-row items-center rounded-full bg-component px-6 transition-colors duration-150 hover:bg-gray-600"
      >
        <SearchIcon class="w-min-8 h-min-8 text-white" />
        <input
          class="ml-3 bg-transparent text-white outline-none"
          placeholder="Search series"
        />
      </div>
    </div>
  </div>
</template>
