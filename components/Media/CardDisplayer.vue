<script setup lang="ts">
const props = defineProps({
  loading: { type: Boolean, required: false, default: false },
  noItemsMessage: {
    type: String,
    required: false,
    default: "There is no records",
  },
  items: { type: Array<any>, required: false, default: () => [] },
});
</script>
<template>
  <article class="card-displayer">
    <Loader v-if="loading" />
    <template v-else>
      <slot></slot>
      <span v-if="items.length === 0" class="no-items">
        {{ noItemsMessage }}
      </span>
    </template>
  </article>
</template>
