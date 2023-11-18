<script setup lang="ts">
const props = defineProps({
  type: { required: false, type: String, default: "text" },
  placeholder: { required: true, type: String },
});
</script>
<template>
  <input :type="type" :placeholder="placeholder" />
</template>
