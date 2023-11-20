<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
defineProps<{
  title?: string;
}>();
const emit = defineEmits<{
  (e: "confirm"): void;
}>();
</script>
<template>
  <VueFinalModal class="modal generic">
    <h1 class="text-xl">
      {{ title }}
    </h1>
    <slot />
    <input type="button" class="secondary-button" value="confirm" @click="emit('confirm')"/>
  </VueFinalModal>
</template>
