<template>
  <div>
    <div class="bg-white">
      <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
            >Logo
          </router-link>
          <!-- Mobile menu button -->
          <div @click="navigate" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400"
            >
            <NavBar/>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="flex w-full md:block " id="mobile-menu">
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            justify-center
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="block py-2 pr-4 pl-3 text-gray-700 cursor-pointer">
            Services
          </li>
          <li class="block py-2 pr-4 pl-3 text-gray-700 cursor-pointer">
            Prices
          </li>
          <li class="block py-2 pr-4 pl-3 text-gray-700 cursor-pointer">
            Contact
          </li>
        </ul>
        </div>
        <div :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            justify-center
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          ">
          <router-link to="/Signin" 
            class="block
            py-2 pr-4
            pl-3 w-24
          text-gray-700
            cursor-pointer">
            Sign In
          </router-link>
          <router-link to="/signup" 
            class="block py-2 
            pr-4 pl-3 w-24 
          bg-black 
          text-white
            rounded-md 
            cursor-pointer">
            Sign Up
          </router-link>
          </div>
      </nav>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Svg/NavBar.vue'
export default {
  components:{
    NavBar
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods:{
    navigate(){
      this.showMenu =!this.showMenu;
    }
  }
};
</script>