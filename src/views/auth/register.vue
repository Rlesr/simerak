<template>
  <div>
      <Header />
      <Sidebar />

      <div class="p-6">
          <h1 class="text-2xl font-bold mb-4">Form dengan Multiple Dropdown</h1>

          <!-- Dropdown 1 -->
          <div class="relative inline-block text-left mb-4">
              <button
                  @click="toggleDropdown(0)"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                  Dropdown 1
                  <svg
                      class="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                  >
                      <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                      />
                  </svg>
              </button>
              <div
                  v-show="dropdownStates[0]"
                  class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Opsi 1
                  </a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Opsi 2
                  </a>
              </div>
          </div>

          <!-- Dropdown 2 -->
          <div class="relative inline-block text-left mb-4">
              <button
                  @click="toggleDropdown(1)"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                  Dropdown 2
                  <svg
                      class="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                  >
                      <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                      />
                  </svg>
              </button>
              <div
                  v-show="dropdownStates[1]"
                  class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Opsi A
                  </a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Opsi B
                  </a>
              </div>
          </div>

          <!-- Dropdown 3 -->
          <div class="relative inline-block text-left">
              <button
                  @click="toggleDropdown(2)"
                  class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                  Dropdown 3
                  <svg
                      class="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                  >
                      <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                      />
                  </svg>
              </button>
              <div
                  v-show="dropdownStates[2]"
                  class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Pilihan X
                  </a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Pilihan Y
                  </a>
              </div>
          </div>
      </div>
  </div>
</template>


<script lang="ts">
    import Sidebar from '@/components/layout/Sidebar.vue';
    import Header from '@/components/layout/Header.vue';
    import { ref } from 'vue';

    export default {
        components: { Sidebar, Header },
        name: 'CombinedLayout',
        setup() {
            // State untuk mengontrol status dropdown secara dinamis
            const dropdownStates = ref<boolean[]>([false, false, false]);

            // Fungsi untuk toggle dropdown tertentu
            const toggleDropdown = (index: number) => {
                // Tutup semua dropdown lainnya sebelum membuka yang dipilih
                dropdownStates.value = dropdownStates.value.map((_, i) => i === index);
            };

            // Fungsi untuk menutup semua dropdown
            const closeAllDropdowns = () => {
                dropdownStates.value = dropdownStates.value.map(() => false);
            };

            return {
                dropdownStates,
                toggleDropdown,
                closeAllDropdowns,
            };
        },
    };
</script>
