<template>
  <div class="page-wrapper">
    <div class="app-body min-h-screen flex justify-end items-center pr-4">
      <div class="w-full max-w-5md flex flex-col ml-[40px] items-start mb-[100px] px-6">
        <div class="mb-2 ml-6">
          <img src="/src/assets/brand/logo-simerak.png" alt="Logo Simerak" class="w-[300px] h-auto">
        </div>
        <div class="text-white mt-4 ml-6">
          <h1 class="text-5xl font-bold mb-2">Sistem Informasi</h1>
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
          <div class="mb-3 relative">
            <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg rounded-lg w-full p-2 border border-gray-300" placeholder="Password" v-model="form.password" required>
            <svg @click="togglePasswordVisibility" xmlns="http://www.w3.org/2000/svg" :class="['h-6 w-6 absolute right-3 top-3 cursor-pointer']" fill="none" viewBox="0 0 24 24" stroke="#044DA4">
  <g v-if="showPassword" fill="none" stroke="#044DA4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
    <path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7" />
  </g>
  <g v-else fill="none" stroke="#044DA4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
    <!-- Garis melingkar pada ikon mata tertutup -->
    <path d="M10.73 5.073A11 11 0 0 1 12 5c4.664 0 8.4 2.903 10 7a11.6 11.6 0 0 1-1.555 2.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12c1.6 4.097 5.336 7 10 7a10.44 10.44 0 0 0 5.48-1.52m-7.6-7.6a3 3 0 1 0 4.243 4.243"/>
    <!-- Garis silang biru -->
    <path d="M4 4l16 16" stroke="#044DA4" stroke-width="1.5" />
  </g>
</svg>
          </div>
          <div class="mb-3 flex items-center">
            <input type="text" class="form-control form-control-lg mr-5 rounded-lg w-full p-2 border border-gray-300" placeholder="Captcha" v-model="form.captcha" required>
            <div class="flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 py-2 ml-2">
              <span class="font-bold text-[#F57900] mr-2">{{ captcha }}</span>
              <svg @click="makeCaptcha" class="h-6 w-6 text-blue-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

    <Footer />
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';
import Footer from '/src/components/layout/Footer.vue';

export default {
  components: {
    Footer,
  },
  setup() {
    const form = reactive({
      username: '',
      password: '',
      captcha: '',
    });
    const captcha = ref('');
    const showPassword = ref(false);

    const isFormValid = computed(() => form.username && form.password && form.captcha === captcha.value);
    const isCaptchaValid = computed(() => form.captcha === captcha.value);

    const makeCaptcha = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      captcha.value = Array.from({ length: 6 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    };

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const login = () => {
      if (isFormValid.value) {
        alert('Login berhasil!');
      } else {
        alert('Captcha tidak sesuai!');
      }
    };

    onMounted(() => makeCaptcha());

    return { form, captcha, login, makeCaptcha, isFormValid, isCaptchaValid, showPassword, togglePasswordVisibility };
  },
};
</script>

<style>

.page-wrapper {
  background-color: #7EA5EC;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.page-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/src/assets/brand/image4.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.app-body {
  position: relative;
  z-index: 1;
  flex: 1;
}
</style>
