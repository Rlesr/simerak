<template>
  <div :class="[
    'flex justify-between items-center px-4 py-2 shadow-md bg-white transition-all duration-300 fixed top-0 right-0',
    isSidebarOpen ? 'md:ml-64' : 'ml-0',
    'w-full md:w-[calc(100%-16rem)]'
  ]">
    <!-- Burger Menu -->
    <button
      @click="$emit('toggle-sidebar')"
      class="p-2 rounded hover:bg-gray-100 md:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="!isSidebarOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Rest of navbar content -->
    <div class="navbar-content flex flex-1 justify-between items-center">
      <!-- Search Bar -->
      <form class="w-full max-w-md px-4">
        <label for="default-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
      </form>

      <!-- Profile Dropdown -->
      <div class="relative px-4">
        <button @click="toggleDropdown" class="flex items-center space-x-2 focus:outline-none">
          <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </button>

        <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile Settings</a>
          <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Account</a>
          <a href="#" @click="logout" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navbar',
  props: {
    isSidebarOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ['toggle-sidebar'],
  setup() {
    const isDropdownOpen = ref(false);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const logout = () => {
      console.log('Logging out...');
      // Add logout logic here
    };

    const closeDropdown = (event: MouseEvent) => {
      const el = event.target as HTMLElement;
      if (!el.closest('.relative')) {
        isDropdownOpen.value = false;
      }
    };

    return {
      isDropdownOpen,
      toggleDropdown,
      logout,
      closeDropdown
    };
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown);
  }
});
</script>

<style scoped>
/* Styles for the navbar */
</style>
