<script setup lang="ts">
import { ref } from "vue";
const store = useAuthStore();
const email: Ref = ref("");
const password: Ref = ref("");
const sendForm = () =>
  store.register({ email: email.value, password: password.value });
</script>
<template>
  <FormWrapper>
    <Form @submit="sendForm" title="register" submit-label="register">
      <Input v-model="email" placeholder="email" />
      <Input v-model="password" placeholder="pasword" type="password" />
      <span>
        Have an account already?
        <nuxt-link to="/login">Sign in</nuxt-link>
      </span>
    </Form>
  </FormWrapper>
</template>
