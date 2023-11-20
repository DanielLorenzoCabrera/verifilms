import { defineStore } from "pinia";
import type { Credential } from "~/types/User";
interface Auth {
  isLoggedIn: Boolean;
  currentCredentials: Credential;
  registeredUsers: Array<Credential>;
}

export const useAuthStore = defineStore("Auth", {
  persist: true,
  state: () =>
    ({
      isLoggedIn: false,
      currentCredentials: { email: "", password: "" },
      registeredUsers: [],
    } as Auth),
  actions: {
    displayModalMessage(title: String): void {
      const modalStore = useModalStore();
      modalStore.setModalTitle(title);
      modalStore.setModalDisplay(true);
    },
    isUserRegistered(credential: Credential) {
      const registeredUsers: Array<Credential> = this.registeredUsers;
      return registeredUsers.some(
        (registeredUser: Credential) =>
          registeredUser.email === credential.email
      );
    },
    login(credential: Credential): void {
      const isUserRegistered: Boolean = this.isUserRegistered(credential);
      if (isUserRegistered) {
        this.currentCredentials = { ...credential };
        this.isLoggedIn = true;
      }
      return this.displayModalMessage("The user does not exists");
    },
    register(credential: Credential): void {
      const isUserRegistered: Boolean = this.isUserRegistered(credential);
      if (isUserRegistered)
        return this.displayModalMessage("This user already exists");
      this.registeredUsers = [...this.registeredUsers, credential];
      navigateTo({ name: "films" });
    },
  },
});
