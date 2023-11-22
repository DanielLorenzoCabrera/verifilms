<script setup lang="ts">
const props = defineProps({
  id: { type: String, requied: true },
  poster: { type: String, required: false },
  title: { type: String, required: true },
  type: { type: String, required: true },
  year: { type: String, required: true },
});
</script>
<template>
  <article class="film-card">
    <figure v-if="poster">
      <img :src="poster" />
    </figure>
    <section></section>
  </article>
</template>
