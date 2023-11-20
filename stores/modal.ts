import { defineStore } from "pinia";

interface ModalState {
  isOpen: Boolean;
  title: String;
}

export const useModalStore = defineStore("Modal", {
  state: () =>
    ({
      isOpen: false,
      title: "",
    } as ModalState),
  actions: {
    setModalDisplay(isOpen: Boolean) {
      this.isOpen = isOpen;
    },
    setModalTitle(title: string) {
      this.title = title;
    },
  },
  getters: {
    getIsOpen(): Boolean {
      return this.isOpen;
    },
    getTitle(): String {
      return this.title;
    },
  },
});
