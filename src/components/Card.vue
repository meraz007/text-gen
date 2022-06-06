<template>
    
    <BaseCard>
    <template #header>
      <h1>A paragraph for the main content</h1>
    </template>
    <template #default>
    <p>Here's some contact info</p>
    <p>And another one.</p>
  </template>
    <template #footer>
    <p>Here's some contact info</p>
  </template>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
export default {
    components:{
       BaseCard 
    },
}
</script>