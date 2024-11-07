<template>
    <div class="app-body min-h-screen bg-gray-200 bg-cover bg-center flex justify-center items-center" style="background-image: url('/src/assets/brand/landing.png');">
      <div class="bg-white max-w-sm p-8 shadow-lg rounded-3xl">
        <div class="text-center mb-3">
          <b class="text-2xl">siMERAK</b>
          <p class="text-lg font-bold">SELAMAT DATANG SILAHKAN LOGIN</p>
        </div>
        <hr>
        <form @submit.prevent="login">
          <div class="mb-3">
            <input type="text" class="form-control form-control-lg rounded-full w-full p-3 border border-gray-300" placeholder="Username" v-model="form.username" required>
          </div>
          <div class="mb-3">
            <input type="password" class="form-control form-control-lg rounded-full w-full p-3 border border-gray-300" placeholder="Password" v-model="form.password" required>
          </div>
          <div class="mb-3 flex">
            <input type="text" class="form-control form-control-lg rounded-full w-full p-3 border border-gray-300" placeholder="Captcha" v-model="form.captcha" required>
            <span class="bg-gray-600 text-white font-bold rounded-lg w-32 flex items-center justify-center p-2">{{ captcha }}</span>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition duration-200" :disabled="!isFormValid"
          >
            Login
          </button>
        </form>
      </div>
    </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';

export default {
  setup() {
    const form = reactive({
      username: '',
      password: '',
      captcha: '',
    });
    const captcha = ref('');
    
    const isFormValid = computed(() => form.username && form.password && form.captcha === captcha.value);
    
    const makeCaptcha = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      captcha.value = Array.from({ length: 6 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    };

    const login = () => {
      if (isFormValid.value) {
        // Tambahkan logika login di sini
        alert('Login berhasil!');
      } else {
        alert('Captcha tidak sesuai!');
      }
    };

    onMounted(() => makeCaptcha());

    return { form, captcha, makeCaptcha, login, isFormValid };
  },
};
</script>
  