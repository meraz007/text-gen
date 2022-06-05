<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import Nav from '@/components/Nav.vue';

export default {
  components:{
    Nav
  }
}
</script>
<style>
</style>
