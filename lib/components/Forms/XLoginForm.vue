<template>
  <section class="mx-auto shadow-lg rounded-lg border-t-8 border-blue" style="width: 375px">
    <div class>
      <div class="p-6 border-l border-r border-grey-light bg-white">
        <div class="font-bold text-center text-lg">Welcome Back!</div>
        <div class="mt-2 pt-4 pr-4 pl-4 pb-2">
         <x-input
  name="user_name"
  label="Enter your user name"
  required="required|email"
  error_name="Username"
  v-model="username"
  value=""
/>
          <x-input
  name="password"
  type="password"
  label="Enter your Password"
  required="required|min:6"
  error_name="Password"
  v-model="password"
  value=""
/>
          <div class="text-right -mt-2 mb-4">
            <nuxt-link
              to="/"
              class="no-underline text-xs text-grey hover:text-grey-darker"
            >Forgot password?</nuxt-link>
          </div>
        </div>
        <a
          class="bg-blue text-white rounded text-center px-4 mx-4 py-3 mb-3 block hover:bg-blue-dark"
        >Sign In</a>
      </div>
      <div
        class="text-center bg-grey-lighter p-4 text-sm border-l rounded-br-lg rounded-bl-lg border-r border-b border-grey-light"
      >Don't have an account?
        <nuxt-link to="/" class="font-bold no-underline hover:underline text-black">Sign Up</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import XInput from "Forms/XInput.vue";
export default {
  components: { XInput },
  data() {
    return {
      username: "",
      password: ""
    }
  },
};
</script>

<style scoped>
</style>