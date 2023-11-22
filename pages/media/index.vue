<script setup lang="ts">
const media = [
  {
    id: "1",
    title: "Game of thrones",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    type: "movie",
    year: "2013",
  },
  {
    id: "2",
    title: "Squid Game",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    type: "movie",
    year: "2021",
  },
  {
    id: "3",
    title: "Apollo",
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    type: "series",
    year: "2000",
  },
];
</script>
<template>
  <main>
    <MediaCard
      v-for="(item, index) in media"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :poster="item.poster"
      :type="item.type"
      :year="item.year"
      :custom-classes="[item.type]"
    />
  </main>
</template>
