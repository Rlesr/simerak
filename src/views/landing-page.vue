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
            <button class="btn btn-lg" style="margin: 0; padding:0;" @click="press()" v-if="!showMe">Login</button>
          </div>
        </div>
      </div>
    </div>

 
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
.navbar-brand{
  font-family: Open Sans;
  font-size: 30px;
}
.navbar-brand, .nav-link{
  color: #434f5e !important;
  margin-bottom: 30px;
  margin-left:30px;
  padding: 20px;
}

.navbar-brand, .nav-link:hover{
  color: #024ea3 !important;
}

.nav-link{
  text-transform: capitalize;
  margin-right: 20px;
  padding: 20px;
}
.display-4{
  color: #024ea3;
  margin-top: 0px;
  margin-left: 150px;
  font-weight: semibold;
}
.display-5{
  color: #024ea3;
  margin-top: 5px;
  margin-left: -130px;
  margin-bottom: 0px;
  font-weight: semibold;
}
.btn{
  color: white;
  background-color: #024ea3 !important;
  margin-top: 5px;
  margin-left: 30px;
  height: 50px;
  width: 100px;
  font-weight: semibold;
}

span{
  color:#434f5e !important;
  font-weight: semibold;
}
.dropdown-menu li {
  position: relative;
  }
.dropdown-menu .dropdown-submenu {
display: none;
position: absolute;
left: 100%;
top: -150px;
}
.dropdown-menu .dropdown-submenu-left {
right: 100%;
left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
display: block;
}

.navbar-landingpage{
  background-color: #e4e7ea;
}

.bg-landing{
  background-image: url("../assets/brand/landing.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.vertical-separator{
  border-left: 3px solid grey;
  height: 24px;
}
</style>
