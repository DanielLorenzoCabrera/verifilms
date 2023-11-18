<script lang="ts">
import logo from "~/assets/img/logo.svg";

export default {
  setup() {
    return {
      logo,
    };
  },
};
</script>

<template>
  <AppWrapper>
    <Header :logo="logo" />
    <NuxtPage />
  </AppWrapper>
</template>
