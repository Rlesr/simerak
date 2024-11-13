<template>
    <aside class="w-64 h-[100vh] bg-[#054083] text-white flex flex-col items-start p-4 overflow-y-scroll no-scrollbar "
    @scroll="onScroll"
    ref="scrollContainer">

        <!-- Logo -->
        <div class="mb-6">
            <img src="/src/assets/brand/logo-simerak.png" alt="Logo Simerak" class="w-[200px] ml-[10px] mt-[20px] h-[73px]mx-auto" />
            <hr class="ml-[10px] mt-[20px] w-[200px]" />
        </div>

        <!-- Menu Items -->
        <ul class="space-y-2 w-full">
            <li>
                <a href="/" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083] group">
                    <span class="mr-2">
                        <!-- Home Icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40px"
                            height="20px"
                            viewBox="0 0 24 24"
                            class="fill-white group-hover:fill-[#054083] transition-colors duration-200"
                        >
                            <path d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z" />
                            <path
                                fill-rule="evenodd"
                                d="M12 1.25c-.708 0-1.351.203-2.05.542c-.674.328-1.454.812-2.427 1.416L5.456 4.491c-.92.572-1.659 1.03-2.227 1.465c-.589.45-1.041.91-1.368 1.507c-.326.595-.472 1.229-.543 1.978c-.068.725-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582c.156 1.205.486 2.178 1.23 2.947c.747.773 1.697 1.119 2.875 1.282c1.14.159 2.598.159 4.434.159h4.116c1.836 0 3.294 0 4.434-.159c1.177-.163 2.128-.509 2.876-1.282c.743-.769 1.073-1.742 1.23-2.947c.152-1.175.152-2.678.152-4.582v-1.613c0-1.113 0-2-.068-2.726c-.07-.75-.217-1.383-.543-1.978c-.327-.597-.78-1.056-1.368-1.507c-.568-.436-1.306-.893-2.227-1.465l-2.067-1.283c-.973-.604-1.753-1.088-2.428-1.416c-.697-.34-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363c.581-.283.993-.391 1.393-.391s.812.108 1.393.391c.598.29 1.312.733 2.327 1.363l2 1.241c.961.597 1.636 1.016 2.14 1.402c.489.375.77.684.963 1.036c.193.353.306.766.365 1.398c.061.648.062 1.465.062 2.623v1.521c0 1.97-.002 3.376-.14 4.443c-.136 1.048-.393 1.656-.82 2.099c-.425.439-1.003.7-2.004.839c-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144c-1.001-.14-1.579-.4-2.003-.84c-.428-.442-.685-1.05-.82-2.098c-.14-1.067-.141-2.472-.141-4.443v-1.521c0-1.158 0-1.975.062-2.623c.059-.632.172-1.045.365-1.398c.193-.352.474-.661.964-1.036c.503-.386 1.178-.805 2.139-1.402z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                    <span href="">Home</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    <span class="mr-2">
                        <!-- Dashboard Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="20px" viewBox="0 0 15 15" fill="currentColor">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill-rule="evenodd"
                                    d="M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z"
                                    clip-rule="evenodd"
                                ></path>
                            </g>
                        </svg>
                    </span>
                    <span>Dashboard</span>
                </a>
            </li>

            <li></li>
            <li>
                <div
                    class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083] cursor-pointer"
                    @click="toggleDropdown"
                >
                    <span class="mr-2">
                        <!-- Buka Rekening Icon -->
                        <svg class="w-[40px] h-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 11.46V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.46C22 10.79 21.46 10.25 20.79 10.25H3.21C2.54 10.25 2 10.79 2 11.46ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M13.5 4.60844V7.53844C13.5 8.20844 12.96 8.74844 12.29 8.74844H3.21C2.53 8.74844 2 8.18844 2 7.51844C2.01 6.38844 2.46 5.35844 3.21 4.60844C3.96 3.85844 5 3.39844 6.14 3.39844H12.29C12.96 3.39844 13.5 3.93844 13.5 4.60844Z"
                                fill="currentColor"
                            ></path>
                            <path
                                d="M19.97 2H17.03C15.76 2 15 2.76 15 4.03V6.97C15 8.24 15.76 9 17.03 9H19.97C21.24 9 22 8.24 22 6.97V4.03C22 2.76 21.24 2 19.97 2ZM20.91 5.93C20.81 6.03 20.66 6.1 20.5 6.11H19.09L19.1 7.5C19.09 7.67 19.03 7.81 18.91 7.93C18.81 8.03 18.66 8.1 18.5 8.1C18.17 8.1 17.9 7.83 17.9 7.5V6.1L16.5 6.11C16.17 6.11 15.9 5.83 15.9 5.5C15.9 5.17 16.17 4.9 16.5 4.9L17.9 4.91V3.51C17.9 3.18 18.17 2.9 18.5 2.9C18.83 2.9 19.1 3.18 19.1 3.51L19.09 4.9H20.5C20.83 4.9 21.1 5.17 21.1 5.5C21.09 5.67 21.02 5.81 20.91 5.93Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </span>
                    <span>Buka Rekening</span>
                    <span :class="{ 'rotate-180': isOpen }" class="ml-auto transition-transform">
                        <!-- Panah dropdown -->
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                                    fill="currentColor"
                                ></path>
                            </g>
                        </svg>
                    </span>
                </div>
            </li>

            <ul v-if="isOpen" class="ml-8 space-y-2">
                <li>
                    <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                        <!-- Icon SVG for Bank DKI -->
                        <svg width="40px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M12.37 2.15009L21.37 5.75006C21.72 5.89006 22 6.31006 22 6.68006V10.0001C22 10.5501 21.55 11.0001 21 11.0001H3C2.45 11.0001 2 10.5501 2 10.0001V6.68006C2 6.31006 2.28 5.89006 2.63 5.75006L11.63 2.15009C11.83 2.07009 12.17 2.07009 12.37 2.15009Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M4 18V11"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M8 18V11"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M12 18V11"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M16 18V11"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M20 18V11"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M1 22H23"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </g>
                        </svg>
                        Bank DKI
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                        <!-- Icon SVG for Non Bank DKI -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="20px" viewBox="0 0 20 21" fill="none">
                            <path
                                d="M10.0001 19.0606C14.5834 19.0606 18.3334 15.3106 18.3334 10.7273C18.3334 6.14395 14.5834 2.39395 10.0001 2.39395C5.41675 2.39395 1.66675 6.14395 1.66675 10.7273C1.66675 15.3106 5.41675 19.0606 10.0001 19.0606Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M7.6416 13.0856L12.3583 8.36896" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.3583 13.0856L7.6416 8.36896" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Non Bank DKI
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                        <!-- Icon SVG for Deposito -->
                        <svg width="40px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M18.05 9.51807C17.6 9.37807 17.12 9.31807 16.64 9.31807H9.72998L12.63 2.58807L12.66 2.51807C12.81 2.56807 12.95 2.63807 13.1 2.69807L15.31 3.62807C16.54 4.13807 17.4 4.66807 17.92 5.30807C18.02 5.42807 18.1 5.53807 18.17 5.66807C18.26 5.80807 18.33 5.94807 18.37 6.09807C18.41 6.18807 18.44 6.27807 18.46 6.35807C18.73 7.19807 18.57 8.22807 18.05 9.51807Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M6.71 5.52808L4.96 9.70808C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42808 4.02 6.05808 6.71 5.52808Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </g>
                        </svg>
                        Deposito
                    </a>
                </li>
            </ul>
            <li>
                <a href="#" class="flex items-center p-2 rounded transition duration-200 hover:bg-[#7EA5EC] hover:text-[#054083]">
                    <span class="mr-2">
                        <!-- Pengusulan Icon -->
                        <svg width="40" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.3334 9.89395V14.894C18.3334 18.2273 17.5001 19.0606 14.1667 19.0606H5.83341C2.50008 19.0606 1.66675 18.2273 1.66675 14.894V6.56062C1.66675 3.22728 2.50008 2.39395 5.83341 2.39395H7.08341C8.33341 2.39395 8.60841 2.76062 9.08341 3.39395L10.3334 5.06062C10.6501 5.47728 10.8334 5.72728 11.6667 5.72728H14.1667C17.5001 5.72728 18.3334 6.56062 18.3334 9.89395Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M6.66675 2.39395H14.1667C15.8334 2.39395 16.6667 3.22728 16.6667 4.89395V6.04395"
                                stroke="currentColor"
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
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9.90845 4.93564C10.2668 7.23564 12.1334 8.99397 14.4501 9.2273"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2.5 19.0606H17.5"
                                stroke="currentColor"
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
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.0833 4.47729V6.14396C12.0833 7.06063 12.8333 7.81063 13.7499 7.81063H15.4166"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.66675 11.5606H10.0001"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M6.66675 14.894H13.3334"
                                stroke="currentColor"
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
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M13.675 4.06062C15.2916 4.06062 16.5916 5.36896 16.5916 6.97729C16.5916 8.55229 15.3417 9.83562 13.7833 9.89396C13.7167 9.88562 13.6417 9.88562 13.5667 9.89396"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M3.4666 12.8606C1.44993 14.2106 1.44993 16.4106 3.4666 17.7523C5.75827 19.2856 9.5166 19.2856 11.8083 17.7523C13.8249 16.4023 13.8249 14.2023 11.8083 12.8606C9.52494 11.3356 5.7666 11.3356 3.4666 12.8606Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M15.2834 17.394C15.8834 17.269 16.4501 17.0273 16.9168 16.669C18.2168 15.694 18.2168 14.0856 16.9168 13.1106C16.4584 12.7606 15.9001 12.5273 15.3084 12.394"
                                stroke="currentColor"
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
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M10 5.30229V17.8023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.45825 7.80229H4.58325" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.08325 10.3023H4.58325" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span>Master</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

    export default {
        name: 'Scrolly',
  setup() {
    const scrollContainer = ref<HTMLElement | null>(null);

    const onScroll = () => {
      if (scrollContainer.value) {
        const scrollTop = scrollContainer.value.scrollTop;
        const scrollHeight = scrollContainer.value.scrollHeight;
        const clientHeight = scrollContainer.value.clientHeight;

        // Persentase scroll
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

        console.log(`Scroll position: ${scrollTop}px (${scrollPercentage.toFixed(2)}%)`);

        // Tambahkan logika lain di sini berdasarkan posisi scroll
      }
    };

    onMounted(() => {
      if (scrollContainer.value) {
        scrollContainer.value.addEventListener('scroll', onScroll);
      }
    });

    return {
      scrollContainer,
      onScroll
    };
  },

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

    .hover-effect:hover svg {
        fill: #054083;
    }

    .no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
