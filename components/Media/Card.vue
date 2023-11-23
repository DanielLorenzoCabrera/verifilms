<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
  poster: { type: String, required: false },
  title: { type: String, required: true },
  type: { type: String, required: true },
  year: { type: String, required: true },
  customClasses: { type: Array<string>, required: false },
});
</script>
<template>
  <article class="film-card" :class="customClasses">
    <figure v-if="poster">
      <img :src="poster" />
    </figure>
    <section>
      <h2> {{ title }}</h2>
      <div>
        <span>{{ type }}</span>
        <span>{{ year }}</span>
      </div>
    </section>
  </article>
</template>
