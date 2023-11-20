<script lang="ts" setup>
import logo from "~/assets/img/logo.svg";
import { ModalsContainer, useModal } from "vue-final-modal";
import Generic from "~/components/Modal/Generic.vue";
import { watch } from "vue";

const store = useModalStore();
const { getIsOpen, getTitle } = storeToRefs(store);
const setModalDisplay = (isOpen: Boolean) => store.setModalDisplay(isOpen);
const { open, close, patchOptions } = useModal({
  component: Generic,
  attrs: {
    onConfirm() {
      setModalDisplay(false);
      close();
    },
  },
});


watch(getIsOpen, (isOpen: Boolean) => {
  if (isOpen) open();
});

watch(getTitle, (title: String) => {
  patchOptions({ attrs: { title: title.toString() } });
});
</script>

<template>
  <AppWrapper>
    <Header :logo="logo" />
    <NuxtPage />
    <ModalsContainer />
  </AppWrapper>
</template>
