<template>
  <div class="container col-6">
    <div v-if="showLogin">
      <LoginForm />
      <p class="mt-3">
        No account yet? <span class="toggle-form" @click="showLogin = false">Sign up</span> instead
      </p>
    </div>
    <div v-else>
      <SignupForm />
      <p class="mt-3">
        Already registered? <span class="toggle-form" @click="showLogin = true">Log in</span> instead
      </p>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import SignupForm from '../components/SignupForm.vue';
  import LoginForm from '../components/LoginForm.vue';

  export default {
    name: 'Welcome',
    components: {
      SignupForm,
      LoginForm,
    },
    setup() {
      const showLogin = ref(true);

      return {
        showLogin,
      };
    },
  };
</script>
