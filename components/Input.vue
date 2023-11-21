<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  type: { required: false, type: String, default: "text" },
  placeholder: { required: true, type: String },
  modelValue: { required: true },
  class: { type: String, required: false },
});

const emit = defineEmits(["update:modelValue"]);
const update = (event: any): void =>
  emit("update:modelValue", event.target.value);
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="update"
    :class="class"
  />
</template>
