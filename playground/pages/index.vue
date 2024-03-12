<script setup lang="ts">
import { useNuxtApp } from "#imports";

const {
  vueApp: { $nuxt },
} = useNuxtApp();

const startLoading = () => {
  $nuxt.$loading.start();

  setTimeout(() => {
    $nuxt.$loading.finish();
  }, 2000);
};
</script>

<template>
  <button @click="startLoading">start loading</button>
</template>
