<template>
  <div>
    <Header :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
    <Sidebar
      :isSidebarOpen="isSidebarOpen"
      @close-sidebar="toggleSidebar"
    />
    <main
      :class="[
        'transition-all duration-300',
        isSidebarOpen ? 'md:ml-64' : 'w-full'
      ]"
      class="flex-1"
    >
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from '@/components/layout/Header.vue';
import Sidebar from '@/components/layout/Sidebar.vue';

export default defineComponent({
  name: 'Layout',
  components: { Header, Sidebar },
  setup() {
    const isSidebarOpen = ref(false);

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    return {
      isSidebarOpen,
      toggleSidebar,
    };
  },
});
</script>

<style scoped>
/* Tambahkan style untuk memastikan main content memenuhi halaman */
main {
  transition: margin-left 0.3s ease; /* Transisi untuk margin */
}
</style>
