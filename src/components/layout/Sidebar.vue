<template>
    <aside class="w-64 h-[100vh] bg-[#054083] text-white flex flex-col items-start p-4">
        <!-- Logo -->
        <div class="mb-6">
            <img src="/src/assets/brand/logo-simerak.png" alt="Logo Simerak" class="w-[200px] ml-[10px] mt-[20px] h-[73px]mx-auto" />
            <hr class="ml-[10px] mt-[20px] w-[200px]" />
        </div>

        <!-- Menu Items -->
        <ul class="space-y-2 w-full">
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    <span class="mr-2">
                        <!-- Home Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="20px" viewBox="0 0 24 24">
                            <path fill="white" d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z" />
                            <path
                                fill="white"
                                fill-rule="evenodd"
                                d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    <span class="mr-2">
                        <!-- Dashboard Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="20px" viewBox="0 0 15 15">
                            <path
                                fill="white"
                                fill-rule="evenodd"
                                d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 1.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 2.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 6.96 5.85c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 5.85 1.04C5.676 1 5.48 1 5.25 1zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 0 1-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.11-1.109c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37M2.75 8h2.5c.229 0 .426 0 .6.041A1.5 1.5 0 0 1 6.96 9.15c.04.174.04.37.04.6v2.5c0 .229 0 .426-.041.6a1.5 1.5 0 0 1-1.109 1.11c-.174.04-.37.04-.6.04h-2.5c-.229 0-.426 0-.6-.041a1.5 1.5 0 0 1-1.11-1.109c-.04-.174-.04-.37-.04-.6v-2.5c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04c.174-.04.37-.04.6-.04m.05 1c-.308 0-.374.003-.417.014a.5.5 0 0 0-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37C5.575 9.004 5.509 9 5.2 9zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 9.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6a1.5 1.5 0 0 0 1.109 1.11c.174.041.371.041.6.041h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.109-1.109c.041-.174.041-.371.041-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 12.85 8.04c-.174-.04-.37-.04-.6-.04zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 0 1-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
    <div class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083] cursor-pointer" @click="toggleDropdown">
      <span class="mr-2">
        <!-- Buka Rekening Icon -->
        <svg class="w-[40px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Icon SVG content -->
        </svg>
      </span>
      <span>Buka Rekening</span>
      <span :class="{ 'rotate-180': isOpen }" class="ml-auto transition-transform">
        <!-- Panah dropdown -->
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16l-6-6h12l-6 6z"/>
        </svg>
      </span>
    </div>
    <ul v-if="isOpen" class="ml-8 space-y-2">
      <li>
        <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
          <!-- Icon SVG for Bank DKI -->
          <svg width="40px" height="20px" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Bank DKI SVG content -->
          </svg>
          Bank DKI
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
          <!-- Icon SVG for Non Bank DKI -->
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="20px" viewBox="0 0 24 24">
            <!-- Non Bank DKI SVG content -->
          </svg>
          Non Bank DKI
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
          <!-- Icon SVG for Deposito -->
          <svg width="40px" height="20px" color="white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Deposito SVG content -->
          </svg>
          Deposito
        </a>
      </li>
    </ul>
  </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    <span class="mr-2">
                        <!-- Pengusulan Icon -->
                        <svg width="40" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.3334 9.89395V14.894C18.3334 18.2273 17.5001 19.0606 14.1667 19.0606H5.83341C2.50008 19.0606 1.66675 18.2273 1.66675 14.894V6.56062C1.66675 3.22728 2.50008 2.39395 5.83341 2.39395H7.08341C8.33341 2.39395 8.60841 2.76062 9.08341 3.39395L10.3334 5.06062C10.6501 5.47728 10.8334 5.72728 11.6667 5.72728H14.1667C17.5001 5.72728 18.3334 6.56062 18.3334 9.89395Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M6.66675 2.39395H14.1667C15.8334 2.39395 16.6667 3.22728 16.6667 4.89395V6.04395"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <span>Pengusulan</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    <span class="mr-2">
                        <!-- Ubah Spesimen Icon -->
                        <svg width="40" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.05 3.72728L4.20829 10.9689C3.94996 11.2439 3.69996 11.7856 3.64996 12.1606L3.34162 14.8606C3.23329 15.8356 3.93329 16.5023 4.89996 16.3356L7.58329 15.8773C7.95829 15.8106 8.48329 15.5356 8.74162 15.2523L15.5833 8.01062C16.7666 6.76062 17.3 5.33562 15.4583 3.59395C13.625 1.86895 12.2333 2.47728 11.05 3.72728Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9.90845 4.93564C10.2668 7.23564 12.1334 8.99397 14.4501 9.2273"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2.5 19.0606H17.5"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <span>Ubah Spesimen</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    <span class="mr-2">
                        <!-- Laporan Icon -->
                        <svg width="40" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 6.56063V14.894C17.5 17.394 16.25 19.0606 13.3333 19.0606H6.66667C3.75 19.0606 2.5 17.394 2.5 14.894V6.56063C2.5 4.06063 3.75 2.39397 6.66667 2.39397H13.3333C16.25 2.39397 17.5 4.06063 17.5 6.56063Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.0833 4.47729V6.14396C12.0833 7.06063 12.8333 7.81063 13.7499 7.81063H15.4166"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.66675 11.5606H10.0001"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.66675 14.894H13.3334"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <span>Laporan</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    <span class="mr-2">
                        <!-- User Management Icon -->
                        <svg width="40" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.63338 9.78563C7.55005 9.7773 7.45005 9.7773 7.35838 9.78563C5.37505 9.71897 3.80005 8.09397 3.80005 6.09397C3.80005 4.0523 5.45005 2.39397 7.50005 2.39397C9.54172 2.39397 11.2 4.0523 11.2 6.09397C11.1917 8.09397 9.61672 9.71897 7.63338 9.78563Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M13.675 4.06062C15.2916 4.06062 16.5916 5.36896 16.5916 6.97729C16.5916 8.55229 15.3417 9.83562 13.7833 9.89396C13.7167 9.88562 13.6417 9.88562 13.5667 9.89396"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M3.4666 12.8606C1.44993 14.2106 1.44993 16.4106 3.4666 17.7523C5.75827 19.2856 9.5166 19.2856 11.8083 17.7523C13.8249 16.4023 13.8249 14.2023 11.8083 12.8606C9.52494 11.3356 5.7666 11.3356 3.4666 12.8606Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M15.2834 17.394C15.8834 17.269 16.4501 17.0273 16.9168 16.669C18.2168 15.694 18.2168 14.0856 16.9168 13.1106C16.4584 12.7606 15.9001 12.5273 15.3084 12.394"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <span>User Management</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    <span class="mr-2">
                        <!-- Master Icon -->
                        <svg width="40" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.3334 14.6773V4.61896C18.3334 3.61896 17.5167 2.87729 16.5251 2.96063H16.4751C14.7251 3.11063 12.0667 4.00229 10.5834 4.93563L10.4417 5.02729C10.2001 5.17729 9.80008 5.17729 9.55842 5.02729L9.35008 4.90229C7.86675 3.97729 5.21675 3.09396 3.46675 2.95229C2.47508 2.86896 1.66675 3.61896 1.66675 4.61063V14.6773C1.66675 15.4773 2.31675 16.2273 3.11675 16.3273L3.35841 16.3606C5.16675 16.6023 7.95842 17.519 9.55842 18.394L9.59175 18.4106C9.81675 18.5356 10.1751 18.5356 10.3917 18.4106C11.9917 17.5273 14.7917 16.6023 16.6084 16.3606L16.8834 16.3273C17.6834 16.2273 18.3334 15.4773 18.3334 14.6773Z"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M10 5.30229V17.8023" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.45825 7.80229H4.58325" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.08325 10.3023H4.58325" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span>Master</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
    .rotate-180 {
  transform: rotate(180deg);
}
</style>
