<script lang="ts" setup>
import logo from "~/assets/img/logo.svg";
import { ModalsContainer, useModal } from "vue-final-modal";
import Generic from "~/components/Modal/Generic.vue";
import { watch } from "vue";

const modalStore = useModalStore();
const { getIsOpen, getTitle } = storeToRefs(modalStore);

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);

const {searchMedia} = useMediaStore()
const search = (search: String) => searchMedia(search)
const setModalDisplay = (isOpen: Boolean) => modalStore.setModalDisplay(isOpen);
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
    <Header :logo="logo">
      <SearchBar v-if="isLoggedIn"  placeholder="search films & more" @update="search"/>
    </Header>
    <NuxtPage />
    <ModalsContainer />
  </AppWrapper>
</template>
