<template>
    <div class="grid grid-cols-4 gap-4 mt-5">
        <router-link to="/Details"><Card /></router-link>
        <Card />
        <Card />
      
    </div>
    
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    components:{
        Card
    }
}
</script>

<style>

</style>