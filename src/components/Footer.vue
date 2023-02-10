<script setup lang="ts">
import { IconMail, IconBrandTwitter } from "@tabler/icons-vue";
</script>

<template>
  <footer
    class="md:mt-10 flex w-full flex-row items-center justify-between py-10 px-2"
  >
    <div class="text-sm font-semibold text-gray-500">
      © Copyright BingeWatch {{ new Date().getFullYear() }}
    </div>
    <div class="flex flex-row space-x-3 text-gray-500">
      <a href="https://twitter.com/stoyan_builds" target="_blank">
        <IconBrandTwitter
          class="transition-colors duration-150 hover:text-gray-400"
        />
      </a>

      <a href="mailto:hello@stoyanivanov.com">
        <IconMail class="transition-colors duration-150 hover:text-gray-400" />
      </a>
    </div>
  </footer>
</template>
