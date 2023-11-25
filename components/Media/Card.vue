<script setup lang="ts">
import {  computed } from "vue";
const props = defineProps({
  id: { type: String, required: true },
  poster: { type: String, required: false },
  title: { type: String, required: true },
  type: { type: String, required: true },
  year: { type: String, required: true },
  customClasses: { type: Array<string>, required: false },
  defaultCover: { type: String, required: true },
});

const hasPoster = computed(() => props?.poster !== "N/A");
const source = computed(() => hasPoster.value ? props.poster : props?.defaultCover);
</script>
<template>
  <article class="film-card" :class="customClasses">
    <figure>
      <img :src="source" />
    </figure>
    <section>
      <h2>{{ title }}</h2>
      <div>
        <span>{{ type }}</span>
        <span>{{ year }}</span>
      </div>
    </section>
  </article>
</template>
