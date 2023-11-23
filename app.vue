<script lang="ts" setup>
import logo from "~/assets/img/logo.svg";
import { ModalsContainer, useModal } from "vue-final-modal";
import Generic from "~/components/Modal/Generic.vue";
import { watch } from "vue";

const modalStore = useModalStore();
const { getIsOpen, getTitle } = storeToRefs(modalStore);

const authStore = useAuthStore();
const { logout :logoutAction } = authStore;
const { isLoggedIn } = storeToRefs(authStore);

const { searchMedia } = useMediaStore();
const search = (search: String) => searchMedia(search);
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

searchMedia("Game")

const logout = () => logoutAction();
</script>

<template>
  <AppWrapper>
    <Header :logo="logo">
      <template v-if="isLoggedIn">
        <SearchBar placeholder="search films & more" @update="search" />
        <Input @click="logout" type="button" value="Sign out" class="logout" />
      </template>
    </Header>
    <NuxtPage />
    <ModalsContainer />
  </AppWrapper>
</template>
