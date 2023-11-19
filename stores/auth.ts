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
    isUserRegistered(credential: Credential) {
      const registeredUsers: Array<Credential> = this.registeredUsers;
      return registeredUsers.some(
        (registeredUser: Credential) =>
          registeredUser.email === credential.email
      );
    },
    login(credential: Credential) {
      const isUserRegistered: Boolean = this.isUserRegistered(credential);
      if (isUserRegistered) {
        this.currentCredentials = { ...credential };
        this.isLoggedIn = true;
      }
      return console.log("the user is not registered");
    },
    register(credential: Credential) {
      const isUserRegistered: Boolean = this.isUserRegistered(credential);
      if (isUserRegistered) return console.log("this account already exists");
      this.registeredUsers = [...this.registeredUsers, credential];
    },
  },
});
