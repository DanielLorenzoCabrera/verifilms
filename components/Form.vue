<script setup lang="ts">
const props = defineProps({
  action: { type: Function, required: false },
  title: { type: String, required: false },
  submitLabel: { type: String, required: false },
});
defineEmits(["submit"]);
</script>

<template>
  <form>
    <legend v-if="title">{{ title }}</legend>
    <fieldset>
      <slot></slot>
    </fieldset>
    <input
      v-if="submitLabel"
      type="button"
      @click="$emit('submit')"
      :value="submitLabel"
    />
  </form>
</template>
