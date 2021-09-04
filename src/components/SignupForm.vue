<template>
  <form @submit.prevent="handleSubmit">
    <h2 class="h3 mb-3 fw-normal">Sign Up</h2>
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
    <div class="error mb-3 mt-3"> {{ error }}</div>
    <button class="btn btn-lg button" type="submit">Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';

export default {
      setup() {
          const { error, signup } = useSignup();
          // refs
          const displayName = ref('');
          const email = ref('');
          const password = ref('');

          const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value);
            console.log('User signed up');
          }
          return {
              displayName,
              email,
              password,
              handleSubmit,
              error
          }
      }
  };
</script>
