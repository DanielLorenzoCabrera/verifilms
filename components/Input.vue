<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  type: { required: false, type: String, default: "text" },
  placeholder: { required: true, type: String },
  keyup: { required: false, type: Function, default: () => {} },
});

const emit = defineEmits(["update"]);
const input = ref(null);

const update = (): void => emit("update", input.value);
</script>
<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="input"
    @input="update"
  />
</template>
