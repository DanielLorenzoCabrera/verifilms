<script setup lang="ts">
import { ref, watch } from "vue";

const search: Ref<string> = ref("");
let callbackInterval: any = ref();

const props = defineProps({
  placeholder: { type: String, required: true },
});

const emit = defineEmits(["update"])

watch(search, (newSearch) => {
  clearInterval(callbackInterval);
  callbackInterval = setTimeout(() => emit("update", newSearch), 1500);
});
</script>

<template>
  <Input v-model="search" :placeholder="placeholder" class="search-bar" />
</template>
