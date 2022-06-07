<template>
  <div class="home">
    <div class="flex justify-center mt-36">
      <div class="w-7/12">
        <h1 class="text-3xl text-center md:text-5xl font-bold">A better, 10x faster way to write</h1>
        <h2 class="text-center py-4">Rytr is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!</h2>
        <div class="flex justify-center">
        <router-link to="/about" class="bg-orange-600 px-6 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none ">text-gen</router-link>
        </div>
      </div>
  </div>
  <div class="flex justify-center mt-20">
    <h1 class="text-4xl font-bold text-gray-900">Client Feedback</h1>
  </div>
  <div class="grid justify-center content-center gap-4 md:grid-flow-col mt-12">
      <Card />
      <Card />
      </div>
  <Footer class="mt-4"></Footer>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Card,
    Footer,
  }
}
</script>

<style scoped>
</style>