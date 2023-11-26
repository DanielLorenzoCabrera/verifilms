<script lang="ts" setup>
import logo from "~/assets/img/logo.svg";
import { ModalsContainer, useModal } from "vue-final-modal";
import Generic from "~/components/Modal/Generic.vue";
import { watch, onMounted, ref } from "vue";

const modalStore = useModalStore();
const { getIsOpen, getTitle } = storeToRefs(modalStore);
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

const authStore = useAuthStore();
const { logout: logoutAction } = authStore;
const { isLoggedIn } = storeToRefs(authStore);

const mediaStore = useMediaStore();
const { searchMediaByTitle } = mediaStore;
const { search } = storeToRefs(mediaStore);
const searchMedia = (search: String) => searchMediaByTitle(search);

const generalStore = useGeneralStore();
const { setIsMobile } = generalStore;
const { isMobile } = storeToRefs(generalStore);
const handleScreenResize = (event: Event) => {
  const { target } = event;
  if (target) setIsMobile((target as Window).innerWidth);
};

const appWrapperClasses = ref({ mobile: isMobile });

onMounted(() => {
  setIsMobile(window.innerWidth);
  window.addEventListener("resize", handleScreenResize);
});

watch(getIsOpen, (isOpen: Boolean) => {
  if (isOpen) open();
});
watch(getTitle, (title: String) => {
  patchOptions({ attrs: { title: title.toString() } });
});
const existPreviousSearch = search.value.title !== "";
existPreviousSearch
  ? await searchMediaByTitle(search.value.title, Number(search.value.page))
  : await searchMediaByTitle("Game");

const logout = () => logoutAction();
</script>

<template>
  <AppWrapper :classes="appWrapperClasses">
    <Header :logo="logo">
      <template v-if="isLoggedIn">
        <SearchBar placeholder="search films & more" @update="searchMedia" />
        <Input @click="logout" type="button" value="Sign out" class="logout" />
      </template>
    </Header>
    <NuxtPage />
    <ModalsContainer />
  </AppWrapper>
</template>
