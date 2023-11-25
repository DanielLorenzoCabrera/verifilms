<script setup lang="ts">
import coverUnavailable from "~/assets/img/cover_unavailable.jpg";
import { ref, watch } from "vue";
const page = ref(1)
const mediaStore = useMediaStore();
const { filmsAndSeries, loading, totalPages, search } = storeToRefs(mediaStore);

const noFilmsMessage =
  "Oops! It seems like we don't have what you're looking for";
watch(page, async (newPage) => {
  const {title} = search.value;
  await mediaStore.searchMediaByTitle(title, newPage)
})
</script>
<template>
  <MediaCardDisplayer
    :loading="loading"
    :items="filmsAndSeries"
    :no-items-message="noFilmsMessage"
  >
    <MediaCard
      v-for="(item, index) in filmsAndSeries"
      :key="item.imdbID.toString()"
      :id="item.imdbID.toString()"
      :title="item.Title.toString()"
      :poster="item.Poster?.toString()"
      :type="item.Type.toString()"
      :year="item.Year.toString()"
      :custom-classes="[item.Type.toString()]"
      :default-cover="coverUnavailable"
    />
    <Footer>
      <UPagination
        :max="3"
        :page-count="5"
        :total="totalPages"
        v-model="page"
      />
    </Footer>
  </MediaCardDisplayer>
</template>
