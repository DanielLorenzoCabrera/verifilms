<script setup lang="ts">
    const props = defineProps({
    action: { type: Function, required: true },
    title: { type: String, required: false },
    submitLabel: { type: String, required: false, default: "send" },
    });
</script>

<template>
  <form>
    <legend v-if="title">{{ title }}</legend>
    <fieldset>
      <slot></slot>
    </fieldset>
    <input type="button" @click="() => action" :value="submitLabel" />
  </form>
</template>
