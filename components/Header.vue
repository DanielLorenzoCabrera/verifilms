<script setup lang="ts">
  const props = defineProps({
    logo: { type: String, default: "" },
  });
</script>

<template>
  <header>
    <figure>
      <nuxt-link to="/">
        <img :src="logo" />
      </nuxt-link>
    </figure>
    <slot />
  </header>
</template>
