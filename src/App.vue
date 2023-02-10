<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="flex flex-row justify-center pt-10">
    <div class="flex w-full flex-col items-center px-4 lg:w-9/12">
      <Header />
      <RouterView class="mt-4 md:mt-10" />
      <Footer />
    </div>
  </main>
</template>
