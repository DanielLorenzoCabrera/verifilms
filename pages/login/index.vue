<script setup lang="ts">
import { ref } from "vue";

const store = useAuthStore();
const email = ref("");
const password = ref("");
const login = () =>
  store.login({ email: email.value, password: password.value });

</script>

<template>
  <FormWrapper>
    <Form title="login" submit-label="login" @submit="login">
      <Input v-model="email" label="email" />
      <Input label="pasword" type="password" v-model="password" />
      <span>
        New to Verifilms?
        <nuxt-link to="/register">Sign up now</nuxt-link>
      </span>
    </Form>
  </FormWrapper>
</template>
