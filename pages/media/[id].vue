<script setup lang="ts">
const route = useRoute();
const mediaStore = useMediaStore();
const { mediaSelected } = storeToRefs(mediaStore);
const { id } = route.params;
await mediaStore.searchMediaById(id.toString());
</script>
<template>
  <MediaInfo :media="mediaSelected" />
</template>
