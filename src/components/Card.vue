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
    data(){
      return{
        lists:[
        {
          id:1,
          title:'A paragraph for the main content',
          description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
         {
          id:2,
          title:'A paragraph for the main content',
          description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
         {
          id:3,
          title:'A paragraph for the main content',
          description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
        ]
      }
      
    }
}
</script>