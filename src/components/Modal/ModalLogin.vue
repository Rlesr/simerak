<!-- src/components/LoginModal.vue -->
<template>
    <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50" @click.self="close">
      <div class="bg-white rounded-lg shadow-lg p-6 w-80 md:w-96">
        <h2 class="text-xl font-semibold text-center">siMERAK</h2>
        <p class="text-center text-gray-500 mb-4">SELAMAT DATANG SILAHKAN LOGIN</p>

        <form @submit.prevent="login">
          <input
            type="text"
            placeholder="SUPERADMIN"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            v-model="username"
            required
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            v-model="password"
            required
          />
          <div class="flex items-center mb-4">
            <input
              type="text"
              placeholder="Captcha"
              class="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <div class="ml-2 px-4 py-3 bg-gray-700 text-white font-semibold rounded-md">
              zw660X
            </div>
          </div>
          <button type="submit" class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
            Login
          </button>
        </form>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "ModalLogin",
    props: {
      show: Boolean,
    },
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      close() {
        this.$emit("close");
      },
      login() {
        alert("Logging in... (implement login logic here)");
        this.close();
      },
    },
  };
  </script>

  <style scoped>
  /* You may add any additional styles if needed */
  </style>
