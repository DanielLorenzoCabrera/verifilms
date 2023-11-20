<script setup lang="ts">
import { ref } from "vue";
import type { Credential } from "~/types/User";

const store = useAuthStore();
const login = () => console.log("hey"); //store.login(credentials);
/* const credentials: Credential = reactive({
  email: "",
  password: "",
}); */
const email = ref("");
const password = ref("");
/* const emailChangeHandler = (payload: String) =>
  (credentials.email = payload.toLocaleLowerCase());
const passwordChangeHandler = (payload: String) =>
  (credentials.password = payload); */
</script>

<template>
  <FormWrapper>
    <Form title="login" submit-label="login" @submit="login">
      <Input v-model="email" placeholder="email" />
      <Input placeholder="pasword" type="password" v-model="password" />
      <span>
        New to Verifilms?
        <nuxt-link to="/register">Sign up now</nuxt-link>
      </span>
    </Form>
  </FormWrapper>
</template>
