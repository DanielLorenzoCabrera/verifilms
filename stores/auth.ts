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
    validateCreadendials(credential: Credential) {
      const { email, password }: Credential = credential;
      const user = this.registeredUsers.find(
        (userCredential: Credential) => email === userCredential.email
      );
      return user !== undefined && user.password === credential.password;
    },
    login(credential: Credential): void {
      const isNotRegistered: Boolean = !this.isUserRegistered(credential);
      if (isNotRegistered)
        return this.displayModalMessage("The user does not exists");
      const areCorrectCredentials: Boolean = this.validateCreadendials(credential);
      if (areCorrectCredentials) {
        this.validateCreadendials(credential);
        this.currentCredentials = { ...credential };
        this.isLoggedIn = true;
        navigateTo({ name: "media" });
        return 
      }
      return this.displayModalMessage("Invalid credentials");;
    },
    register(credential: Credential): void {
      const isUserRegistered: Boolean = this.isUserRegistered(credential);
      if (isUserRegistered)
        return this.displayModalMessage("This user already exists");
      this.registeredUsers = [...this.registeredUsers, credential];
      navigateTo({ name: "login" });
    },
  },
});
