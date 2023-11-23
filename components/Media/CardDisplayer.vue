<script setup lang="ts">
const props = defineProps({
  loading: { type: Boolean, required: true },
});
</script>
<template>
    <article class="card-displayer">
        <slot></slot>
    </article>
</template>
