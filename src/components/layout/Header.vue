<template>
    <div class="navbar flex justify-between items-center px-5 py-2 shadow-md bg-white">
      <div class="navbar-content flex gap-6">
        <!-- Navbar items -->
        <form class="w-[400px] ml-16">
          <label for="default-search" class="sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
            

        <button class="ml-96 px-96">
        <div class="relative w-10   mx-24 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
</button>
    </div>

      <div class="navbar-actions flex gap-6">
        <!-- Right side items (e.g., profile, notifications) -->
        <span class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">Notifications</span>

        <!-- Account dropdown -->
        <div class="relative">
          <button @click="toggleDropdown" class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Account
          </button>
          <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
            <router-link to="/profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">View Profile</router-link>
            <router-link to="/settings" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</router-link>
            <button @click="logout" class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "Navbar",
    data() {
      return {
        isDropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      logout() {
        // Logout function here
        console.log("Logging out...");
      },
      closeDropdown() {
        this.isDropdownOpen = false;
      },
      handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {
          this.closeDropdown();
        }
      }
    },
    mounted() {
      document.addEventListener("click", this.handleClickOutside);
    },
    beforeUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    }
  };
  </script>

  <style scoped>
  .navbar {
    margin-left: 250px; /* Adjust to the width of the sidebar */
    width: calc(100% - 250px); /* Full width minus sidebar */
  }
  </style>
