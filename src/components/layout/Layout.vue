<template>
    <div>
      <Navbar 
        :isSidebarOpen="isSidebarOpen"
        @toggle-sidebar="toggleSidebar"
      />
      <Sidebar :isSidebarOpen="isSidebarOpen" />
      <main :class="['transition-all duration-300', isSidebarOpen ? 'md:ml-64' : 'ml-0']">
        <!-- Your main content here -->
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Navbar from '@/components/layout/Header.vue';
  import Sidebar from '@/components/layout/Sidebar.vue';
  
  export default defineComponent({
    name: 'Layout',
    components: {
      Navbar,
      Sidebar
    },
    setup() {
      const isSidebarOpen = ref(false);
  
      const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value;
      };
  
      return {
        isSidebarOpen,
        toggleSidebar
      };
    }
  });
  </script>