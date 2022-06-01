<template>
  <div class="about">
    <router-link to="/" class="bg-orange-600 px-6 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none ">Home</router-link>
    <h1>This is an about page</h1>

    <div class="flex justify-center mt-36 gap-4"> 
    <div class="w-9/12 bg-slate-100 p-7 ">
      <button class="px-6 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none bg-orange-600" @click="activeTab ='Article'">Article</button>
      <button class="px-6 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none bg-orange-600" @click="activeTab ='BrandName'">BrandName</button>
      <button class="px-6 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none bg-orange-600" @click="activeTab ='Blogs'">Blogs</button>
      <button class="px-6 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none bg-orange-600" @click="activeTab ='FacebookPost'">FacebookPost</button>

      <component :is="activeTab" />
    </div>
    </div>
  </div>

    
<!--
<BaseInput
  v-model="event"
  label="Title"
  type="text"
/>-->
</template>

<script>
import Article from '@/components/DynamicComponent/Article.vue'
import Blogs from '@/components/DynamicComponent/Blogs.vue'
import BrandName from '@/components/DynamicComponent/BrandName.vue'
import FacebookPost from '@/components/DynamicComponent/FacebookPost.vue'
import ButtonSimple from '@/components/ButtonSimple.vue'
export default {
   components:{
     Article,
     BrandName,
     Blogs,
     FacebookPost,
     ButtonSimple
   },
   data(){
     return{
       activeTab:'Article'
     }
   }
}
</script>
