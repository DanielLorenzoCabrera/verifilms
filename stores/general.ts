interface GeneralStore {
  isMobile: Boolean;
}

export const useGeneralStore = defineStore("General", {
  state: () =>
    ({
      isMobile: false,
    } as GeneralStore),
  actions: {
    setIsMobile(screenWidth: number) {
        console.log(screenWidth)
      this.isMobile = screenWidth <= 480;
    },
  },
});
