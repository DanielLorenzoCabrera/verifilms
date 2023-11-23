<script setup lang="ts">
const mediaStore = useMediaStore();
const {filmsAndSeries} = storeToRefs(mediaStore)

</script>
<template>
  <MediaCardDisplayer :loading="false">
    <MediaCard
      v-for="(item, index) in filmsAndSeries"
      :key="item.imdbID.toString()"
      :id="item.imdbID.toString()"
      :title="item.Title.toString()"
      :poster="item.Poster?.toString()"
      :type="item.Type.toString()"
      :year="item.Year.toString()"
      :custom-classes="[item.Type.toString()]"
    />
  </MediaCardDisplayer>
</template>
