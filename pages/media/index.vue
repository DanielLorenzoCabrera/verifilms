<script setup lang="ts">
const films = [
  {
    id: "1234",
    title: "example",
    poster: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    type: "genre",
    year: "2023",
  },
];
</script>
<template>
  <div>
    <MediaCard
      v-for="(item, index) in films"
      :key="item.title"
      :id="item.id"
      :title="item.title"
      :poster="item.poster"
      :type="item.type"
      :year="item.year"
    />
  </div>
</template>
