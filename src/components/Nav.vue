<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  <div class="container flex mx-auto">
    <a class="flex items-center">
        <router-link to="/" class="self-center text-xl font-semibold whitespace-nowrap text-gray-500">Text-Gen</router-link>
    </a>
    <div class="flex justify-center w-full md:block " id="mobile-menu">
      <ul class="flex flex-col justify-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <a class="block py-2 pr-4 pl-3 text-gray-700 cursor-pointer">Services</a>
        </li>
        <li>
          <a class="block py-2 pr-4 pl-3 text-gray-700 cursor-pointer">Pricing</a>
        </li>
        <li>
          <a class="block py-2 pr-4 pl-3 text-gray-700 cursor-pointer">Contact</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-row">
      <router-link to="/Signin" class="block py-2 pr-4 pl-3 w-24 text-gray-700 cursor-pointer">Sign In</router-link>
      <router-link to="/signup" class="block py-2 pr-4 pl-3 w-24 bg-black text-white rounded-md cursor-pointer">
        Sign Up</router-link>
  </div>
  </div>
</nav>
</template>

<script>
import ButtonSimple from '@/components/ButtonSimple.vue'
export default {
    components:{
        ButtonSimple
    }
}
</script>