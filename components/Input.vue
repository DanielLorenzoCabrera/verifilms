<script setup lang="ts">
const props = defineProps({
  type: { required: false, type: String, default: "text" },
  label: { required: false, type: String },
  placeholder: { required: false, type: String },
  modelValue: { required: false },
  class: { type: String, required: false },
});

const emit = defineEmits(["update:modelValue", "click"]);
const update = (event: any): void =>
  emit("update:modelValue", event.target.value);
</script>

<template>
  <label v-if="label">
    {{ label }}
    <input
      :type="type"
      :label="label"
      :value="modelValue"
      @input="update"
      :class="class"
      @click="$emit('click')"
    />
  </label>
  <input
    v-else
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="update"
    :class="class"
    @click="$emit('click')"
  />
</template>
