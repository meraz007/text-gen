<template>
  <div class="about">
    <router-link to="/" class="bg-orange-600 px-6 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none ">Home</router-link>
    <h1>This is an about page</h1>

    <div class="flex justify-center mt-36">
    <div class="w-9/12 bg-slate-100">
      <button @click="activeTab ='Article'">Tab1</button>
      <button @click="activeTab ='BrandName'">Tab2</button>
      <button @click="activeTab ='Blogs'">Tab3</button>
      <button @click="activeTab ='FacebookPost'">Tab4</button>

      <component :is="activeTab" />
    </div>
    </div>
  </div>

   <!-- <Card>
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
  </Card>

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
export default {
   components:{
     Article,
     BrandName,
     Blogs,
     FacebookPost
   },
   data(){
     return{
       activeTab:'Article'
     }
   }
}
</script>
