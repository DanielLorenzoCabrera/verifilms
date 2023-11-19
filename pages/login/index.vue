<script setup lang="ts">
import { reactive } from "vue";
import type { Credential } from "~/types/User";

const store = useAuthStore();
const login = () => store.login(credentials);
const credentials: Credential = reactive({
  email: "",
  password: "",
});
const emailChangeHandler = (payload: String) =>
  (credentials.email = payload.toLocaleLowerCase());
const passwordChangeHandler = (payload: String) =>
  (credentials.password = payload);
</script>

<template>
  <FormWrapper>
    <Form
      submit-button
      title="login"
      :submit-label="'login'"
      @submit="login"
    >
      <Input placeholder="email" @update="emailChangeHandler" />
      <Input
        placeholder="pasword"
        type="password"
        @update="passwordChangeHandler"
      />
      <span>
        New to Verifilms?
        <nuxt-link to="/register">Sign up now</nuxt-link>
      </span>
    </Form>
  </FormWrapper>
</template>
