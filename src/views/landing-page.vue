<!-- LandingPage.vue -->
<template>
    <div>
      <div class="top-left-bg">
        <img src="assets/img/brand/top-left-bg.png" class="corner-bg" alt="">
      </div>
      <div class="bottom-right-bg">
        <img src="assets/img/brand/bottom-right-bg.png" class="corner-bg" alt="">
      </div>
      <div class="bg-landing min-vh-100 img-fluid">
        <nav class="navbar navbar-expand-lg navbar-landingpage ml-3">
          <div class="container-fluid">
            <a class="navbar-brand" href="">
              <img src="assets/img/brand/bpkd.png" alt="" height="50" class="d-inline-block align-text-top m-2">
            </a>
  
            <button class="navbar-toggler" type="button"  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item text-center" >
                  <a class="nav-link" :to="{ name: 'dashboard' }"><b>Dashboard</b></a>
                </li>
                <li class="nav-item text-center dropdown">
                  <a class="nav-link dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">
                    <b>Akun</b>
                  </a>
                  <ul class="dropdown-menu" >
                    <li>
                      <b class="dropdown-item">
                        <span class="font-weight-bold">Admin</span><br>
                        <span>Admin</span>
                      </b>
                    </li>
                    <li><a class="dropdown-item" >Ubah Password</a></li>
                    <li><a class="dropdown-item" >Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container-fluid ml-5 pl-5">
          <div class="row">
            <div class="container col-md-6">
              <div class="display-5">
                <img src="assets/img/brand/logo-simerak.png" alt="" style="width: 20%;" class="d-inline-block align-text-top m-2">
              </div>
              <div class="headline page-header">
                <h1>Kelola Keuangan dengan Cerdas bersama Sistem Rekening Kami!</h1>
                <p>Kelola Keuangan Anda dengan Mudah dan Cerdas bersama Sistem Aplikasi Manajemen Rekening Kami!</p>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="display-4">
                    <button class="btn btn-lg" style="font-weight: bold; margin: 0; padding:0; width: 100%;">
                      <a style="color: white;" href="https://drive.google.com/drive/folders/1hE5Hmo6CULyxmPlnAEvEVbE9BnKWuvLz?usp=sharing" target="_blank">Buku Panduan</a>
                    </button>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="display-4">
                    <button class="login-dashboard-btn btn btn-lg" style="margin: 0; padding:0; width: 100%;" >login</button>
                  </div>
                </div>
                <div class="col-md-4"></div>
              </div>
            </div>
            <div class="col-md-6">
              <img src="assets/img/brand/landing-image.png" width="65%" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
</script>