<!-- src/components/Header.vue -->
<template>
    <header class="header flex items-center justify-between">
      <nav>
        <div class="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
                    <router-link to="/" class="main-logo flex items-center shrink-0">
                        <img class="w-8 ltr:-ml-1 rtl:-mr-1 inline" src="./assets/brand/logo-DKI.svg" alt="" />
                        <span
                            class="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle hidden md:inline dark:text-white-light transition-all duration-300"
                            >Simerak</span>
                    </router-link>
                    <h1 class="text-xl font-bold">My Website</h1>
        </div>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Services</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>

  <script>
  export default {
    name: "Header",
  };
  </script>

  <style scoped>
  .header {
    background-color: #3b82f6;
  }
  </style>
