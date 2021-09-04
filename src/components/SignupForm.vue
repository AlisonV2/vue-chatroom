<template>
  <form @submit.prevent="handleSubmit">
    <h1 class="h3 mb-3 fw-normal">Log in</h1>
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Your name"
        v-model="displayName"
        required
      />
      <label>Your name</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        placeholder="name@example.com"
        v-model="email"
        required
      />
      <label>Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
        required
      />
      <label>Password</label>
    </div>
    <button class="btn btn-lg button" type="submit">Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
      setup() {
          // refs
          const displayName = ref('');
          const email = ref('');
          const password = ref('');

          const handleSubmit = () => {
              console.log(email.value, password.value)
          }

          return {
              displayName,
              email,
              password,
              handleSubmit
          }
      }
  };
</script>

<style></style>
