import { BrandLinkedinIcon } from 'vue-tabler-icons'; import { BrandTwitterIcon
} from 'vue-tabler-icons';

<template>
  <footer class="flex flex-row items-center justify-between mt-10 py-10 px-2">
    <div class="text-sm font-semibold text-gray-500">
      © Copyright BingeWatch {{ new Date().getFullYear() }}
    </div>
    <div class="flex flex-row space-x-3 text-gray-500">
      <a href="https://twitter.com/stoyan_builds" target="_blank">
        <BrandTwitterIcon
          class="transition-colors duration-150 hover:text-gray-400"
        />
      </a>

      <a href="mailto:hello@stoyanivanov.com">
        <MailIcon class="transition-colors duration-150 hover:text-gray-400" />
      </a>
    </div>
  </footer>
</template>
