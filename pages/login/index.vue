<script setup lang="ts">
const sendForm = () => console.log("test");
</script>
<template>
  <FormWrapper>
    <Form :action="sendForm" title="login">
      <Input placeholder="email"/>
      <Input placeholder="pasword" type="password"/>
    </Form>
  </FormWrapper>
</template>
