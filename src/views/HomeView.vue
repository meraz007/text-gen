<template>
  <div class="home">
    <Nav />
    <div class="flex justify-center mt-36">
      <div class="w-7/12">
        <h1 class="text-5xl font-bold">A better, 10x faster way to write</h1>
        <h2 class="text-center">Rytr is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!</h2>
        <div class="flex justify-center">
        <router-link to="/about" class="bg-orange-600 px-6 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none ">text-gen</router-link>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'HomeView',
  components: {
    Nav
  }
}
</script>
