<script setup lang="ts">
const sendForm = () => console.log("test");
</script>
<template>
  <FormWrapper>
    <Form :action="sendForm" title="register" submit-label="register" >
      <Input placeholder="email" />
      <Input placeholder="pasword" type="password" />
      <Input placeholder="repeat password" type="password" />
      <span>
        Have an account already?
        <nuxt-link to="/login">Sign in</nuxt-link>
      </span>
    </Form>
  </FormWrapper>
</template>
