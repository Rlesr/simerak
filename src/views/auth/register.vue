<template>
  <div>
    <Header class="fixed-header border-1" />
    <Sidebar class="h-[100vh] fixed-sidebar" />
    <div class="main-content">
      <!-- Konten utama -->
    </div>
  </div>
</template>


<script>
import Header from '@/components/layout/Header.vue'
import Sidebar from '@/components/layout/Sidebar.vue'

export default {
  return:{
    Header,Sidebar
  }
}
</script>

<style scoped>
    .fixed-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background-color: rgb(249 250 251);
        z-index: 50;
    }
    .fixed-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 250px; /* Adjust width as needed */
        background-color: #1e3a8a; /* Adjust color as needed */
    }

    .main-content {
        display: flex;
        margin-top: 60px;
    }
</style>