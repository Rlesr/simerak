<template>

    <div class="app-body min-h-screen bg-[#7EA5EC] bg-cover bg-center flex justify-end  items-center pr-4" style="background-image: url('/src/assets/brand/image4.png');">
    <div class="w-full max-w-5md flex flex-col ml-[40px] items-start mb-[100px] px-6"> <!-- Adjust container width and add padding -->
        <!-- Logo on the left side with left margin -->
        <div class="mb-2 ml-6"> <!-- Adjust margin to keep it from touching the page edge -->
          <img src="/src/assets/brand/logo-simerak.png" alt="Logo Simerak" class="w-[300px] h-auto"> <!-- Smaller width for responsive design -->
        </div>
        <!-- Welcome Text -->
        <div class="text-white mt-4 ml-6"> <!-- Align text with the logo by adding the same margin -->
          <h1 class="text-5xl font-bold mb-2">Sistem Informasi </h1>
          <h1 class="text-5xl font-bold mb-2">Manajemen Rekening Bank</h1>
          <p class="text-[21px] mb-2">Daerah Khusus Ibukota Jakarta</p>
        </div>
     </div>

      <div class="bg-[#7EA5EC] w-[800px] h-auto p-8 mr-20 shadow-lg rounded-3xl">
        <div class="text-center mb-3">
          <h1 class="text-5xl font-bold text-[#054083] mb-3">Login</h1>
          <p class="text-[#054083]">Selamat Datang di siMerak, Silahkan Masuk!</p>
        </div>
        <form @submit.prevent="login">
          <div class="mb-3">
            <input type="text" class="form-control form-control-lg rounded-lg w-full p-2 border border-gray-300" placeholder="Username" v-model="form.username" required>
          </div>
          <div class="mb-3">
            <input type="password" class="form-control form-control-lg rounded-lg w-full p-2 border border-gray-300" placeholder="Password" v-model="form.password" required>
          </div>
          <div class="mb-3 flex items-center">
            <input type="text" class="form-control form-control-lg mr-5 rounded-lg w-full p-2 border border-gray-300" placeholder="Captcha" v-model="form.captcha" required>
            <div class="flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 py-2 ml-2">
              <span class="font-bold text-[#F57900] mr-2">{{ captcha }}</span>
              <svg class="h-6 w-6 text-blue-800"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
          </div>
          <button type="submit" class="w-full bg-[#F57900] text-white py-2 rounded-lg transition duration-200">
            Login
          </button>
        </form>
        <div class="text-center mt-4">
          <p class="text-xs font-bold text-[#054083]">Belum punya akun? Hubungi Cs</p>
        </div>
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
      const isCaptchaValid = computed(() => form.captcha === captcha.value);

      const makeCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        captcha.value = Array.from({ length: 6 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
      };

      const login = () => {
        if (isFormValid.value) {
          alert('Login berhasil!');
        } else {
          alert('Captcha tidak sesuai!');
        }
      };

      onMounted(() => makeCaptcha());

      return { form, captcha, login, makeCaptcha, isFormValid, isCaptchaValid };
    },
  };
  </script>
