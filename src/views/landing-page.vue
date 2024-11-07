<template>
    <div class="bg-landing min-vh-100 img-fluid">
      <NavBar /> <!-- Using Navbar component -->

      <div class="container-fluid">
        <div class="container" style="padding-left: 2;">
          <div class="display-15">
            <img src="../assets/brand/logo-simerak.png" alt="" height="220" class="d-inline-block align-text-top m-3">
          </div>
          <div class="display-4">
            <button class="btn btn-lg" style="margin: 0; padding:0;" @click="press()" v-if="!showMe">Login</button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import NavBar from '../components/layout/NavBar.vue';

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        showMe: false,
      };
    },
    methods: {
      press() {
    
      },
    },
  };
  </script>

  <style scoped>
  /* Landing page styles */
  .bg-landing {
    background-image: url("../assets/brand/landing.png");
    background-color: #e4e7ea;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
  }
  </style>
