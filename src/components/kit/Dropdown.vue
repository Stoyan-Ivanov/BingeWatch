<script setup lang="ts">
import { ref } from "vue";
import { IconTriangleInvertedFilled } from "@tabler/icons-vue";

defineProps<{
  label: string;
  options: Map<string, string>;
}>();

/**
 * 🚩 Flag for whether the label is being hovered on
 */
const labelMouseover = ref(false);

/**
 * 🚩 Flag for whether the menu is being hovered on
 */
const menuMouseover = ref(false);
</script>

<template>
  <div class="flex justify-center">
    <div class="dropdown relative">
      <div
        class="duration-50 flex cursor-pointer items-center px-6 py-2.5 text-sm font-medium uppercase leading-tight text-white transition-colors ease-in-out"
        :class="{
          'text-primary': labelMouseover || menuMouseover,
        }"
        @mouseover="labelMouseover = true"
        @mouseleave="labelMouseover = false"
      >
        {{ label }}
        <IconTriangleInvertedFilled
          class="ml-2 w-2 transition duration-150 ease-in-out"
          :class="{
            'rotate-180': labelMouseover || menuMouseover,
          }"
          stroke-width="4"
        />
      </div>
      <div
        v-show="labelMouseover || menuMouseover"
        @mouseover="menuMouseover = true"
        @mouseleave="menuMouseover = false"
        class="absolute z-50 float-left m-0 w-full rounded-lg bg-component bg-clip-padding py-2 text-left shadow-lg"
      >
        <div v-for="[label, link] in options.entries()">
          <a
            class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-secondary transition duration-150 hover:text-white"
            :href="link"
          >
            {{ label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
