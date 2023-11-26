<script setup lang="ts">
import type { TabItem } from "@nuxt/ui/dist/runtime/types";

const props = defineProps({
  media: { type: Object, required: false },
});

const tabContent: Array<TabItem> = [
  { label: "Overview", content: props.media?.Plot },
  {
    label: "About",
    content: {
      director: props.media?.Director,
      ratings: props.media?.Ratings,
      actors: props.media?.Actors,
    },
  },
];
</script>
<template>
  <article class="media-info">
    <figure>
      <img :src="media?.Poster" alt="media cover" />
    </figure>
    <section>
      <h1>
        {{ media?.Title }} | <span>{{ media?.Type }}</span>
      </h1>
      <div>
        <span>{{ media?.Year }}</span>
        <span>{{ media?.Runtime }}</span>
        <span>{{ media?.Rated }}</span>
      </div>
      <div>
        <UTabs :items="tabContent">
          <template #item="{ item }">
            <div class="overview" v-if="item.label === 'Overview'">
              {{ item.content }}
            </div>
            <div class="about" v-if="item.label === 'About'">
              <h3>Director: {{ item.content?.director }}</h3>
              <h3>Actors: {{ item.content?.actors }}</h3>
              <section v-if="item.content?.ratings">
                <article
                  v-for="(rating, index) in item.content.ratings"
                  :key="rating.source"
                  class="rating"
                >
                  <span>{{ rating.Value }}</span>
                  <span>{{ rating.Source }}</span>
                </article>
              </section>
            </div>
          </template>
        </UTabs>
      </div>
    </section>
  </article>
</template>
