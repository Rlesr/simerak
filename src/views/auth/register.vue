<template>
        <Header class="fixed-header border-1"/>


<Sidebar class="fixed-sidebar" />


</template>

<script lang="ts">
import Sidebar from '@/components/layout/Sidebar.vue';
import Header from '@/components/layout/Header.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Sidebar, Header },name:'register'})
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
        width: 250px;
        background-color: #1E3A8A;
    }
</style>
