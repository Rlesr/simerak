<template>
    <div class="bg-landing min-vh-100 img-fluid">
      <nav class="navbar navbar-expand-lg navbar-landingpage">
        <div class="container-fluid">
          <a class="navbar-brand" href="">
            <img src="../assets/brand/bpkd.png" alt="" height="75" class="d-inline-block align-text-top m-2">
          </a>
          <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" :class="{ show: navbarOpen }" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item text-center" v-if="listAplikasi.includes('DASHBOARD') && showMe">
                <router-link class="nav-link" to="/dashboard" @click="bukaRekeningMenu('DASHBOARD')"><b>Dashboard</b></router-link>
              </li>
              <li class="nav-item pt-3" v-if="listAplikasi.includes('DASHBOARD') && showMe">
                <div class="vertical-separator"></div>
              </li>
              <li class="nav-item text-center" v-if="listAplikasi.includes('buka') && showMe">
                <router-link class="nav-link" to="/buka/opd" @click="bukaRekeningMenu('buka')"><b>Buka Rekening</b></router-link>
              </li>
              <li class="nav-item pt-3" v-if="listAplikasi.includes('buka') && showMe">
                <div class="vertical-separator"></div>
              </li>
              <!-- Add other items in similar structure -->
              <li class="nav-item text-center dropdown" v-if="listAplikasi.includes('master') && showMe">
                <a @click="toggleDropdown('master')" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" aria-haspopup="true" :aria-expanded="dropdownOpen === 'master'">
                  <b>Master</b>
                </a>
                <ul class="dropdown-menu" v-if="dropdownOpen === 'master'" aria-labelledby="navbarDropdownMenuLink" style="margin-left: -30px; margin-top: -40px;">
                  <li><router-link class="dropdown-item" to="/master/identifikasi-kategori" @click="bukaRekeningMenu('master')">Identifikasi Kategori</router-link></li>
                  <li><router-link class="dropdown-item" to="/master/identifikasi-rekening" @click="bukaRekeningMenu('master')">Identifikasi Rekening</router-link></li>
                  <!-- Add other dropdown items similarly -->
                </ul>
              </li>
              <li class="nav-item pt-3" v-if="listAplikasi.includes('master') && showMe">
                <div class="vertical-separator"></div>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link" href="https://drive.google.com/drive/folders/1hE5Hmo6CULyxmPlnAEvEVbE9BnKWuvLz?usp=sharing" target="_blank"><b>Buku Panduan</b></a>
              </li>
              <!-- Account dropdown and other nav items here -->
            </ul>
          </div>
        </div>
      </nav>

      <div class="container-fluid">
        <div class="container" style="padding-left: 2;">
          <div class="display-5">
            <img src="../assets/brand/logo-simerak.png" alt="" height="220" class="d-inline-block align-text-top m-2">
          </div>
          <div class="display-4">
            <button class="btn btn-lg" style="margin: 0; padding:0;" @click="press()" v-if="!showMe">{{ button }}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Changing Password -->
    <button class="d-none" @click="openModal" id="button-modal"></button>
    <b-modal v-model="isModalOpen" title="Ubah Password">
      <form @submit.prevent="changePassword">
        <div class="form-group row mt-0 mb-0">
          <label class="col-md-3 col-form-label">Kata sandi lama</label>
          <div class="col-md-9">
            <input type="password" v-model="formPassword.sandiLama" class="form-control m-1">
          </div>
        </div>
        <div class="form-group row mt-0 mb-0">
          <label class="col-md-3 col-form-label">Kata sandi</label>
          <div class="col-md-9">
            <input type="password" v-model="formPassword.sandi" class="form-control m-1">
          </div>
        </div>
        <div class="form-group row mt-0 mb-0">
          <label class="col-md-3 col-form-label">Konfirmasi Kata sandi</label>
          <div class="col-md-9">
            <input type="password" v-model="formPassword.konfirmasiSandi" class="form-control m-1">
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </b-modal>
  </template>

  <script>
  export default {
    data() {
      return {
        navbarOpen: false,
        dropdownOpen: null,
        showMe: false,
        button: "Button Text",
        listAplikasi: ['DASHBOARD', 'buka', 'tutup', 'PENGUSULAN', 'UM', 'ubah-specimen', 'laporan', 'master'],
        currentUser: {
          pengguna: { nama: "Nama Pengguna", nrk: "123456" }
        },
        formPassword: {
          sandiLama: '',
          sandi: '',
          konfirmasiSandi: ''
        },
        isModalOpen: false,
      };
    },
    methods: {
      toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
      },
      toggleDropdown(menu) {
        this.dropdownOpen = this.dropdownOpen === menu ? null : menu;
      },
      bukaRekeningMenu(menu) {
        // Implementasi fungsi bukaRekeningMenu di sini
      },
      press() {
        // Implementasi fungsi press di sini
      },
      openModal() {
        this.isModalOpen = true;
      },
      changePassword() {
        // Implementasi fungsi changePassword di sini
        this.isModalOpen = false;
      }
    }
  };
  </script>

  <style>
  /* Tambahkan style yang diperlukan */
  </style>
