<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class="flex flex-row justify-center pt-10">
    <div class="flex w-9/12 flex-col">
      <Header />
      <RouterView class="mt-10" />
      <Footer/>
    </div>
  </main>
</template>
