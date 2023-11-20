<script lang="ts" setup>
import logo from "~/assets/img/logo.svg";
import { ModalsContainer, useModal } from "vue-final-modal";
import Generic from "~/components/Modal/Generic.vue";

const { open, close } = useModal({
  component: Generic,
  attrs: {
    title: "Test modal",
    onConfirm() {
      close();
    },
  },
});

</script>

<template>
  <AppWrapper>
    <Header :logo="logo" />
    <NuxtPage />
    <ModalsContainer/>
  </AppWrapper>
</template>
