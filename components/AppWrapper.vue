<script setup lang="ts">
const props = defineProps({
  classes: { required: false, type: Object },
});
</script>
<template>
  <main id="app-wrapper" :class="classes">
    <slot></slot>
  </main>
</template>
