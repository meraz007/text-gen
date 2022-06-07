<template>
   <div class="about">
    <div class="flex justify-center mt-20"> 
      <div class="w-9/12 bg-slate-100 p-7 ">
      <div class="grid gap-4 grid-cols-4">
        <button class="text-center md:py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none bg-orange-600" @click="activeTab ='Article'">Article</button>
        <button class="text-center font-semibold text-white rounded-md hover:opacity-95 focus:outline-none bg-orange-600" @click="activeTab ='BrandName'">BrandName</button>
        <button class="text-center font-semibold text-white rounded-md hover:opacity-95 focus:outline-none bg-orange-600" @click="activeTab ='Blogs'">Blogs</button>
        <button class="text-center font-semibold text-white rounded-md hover:opacity-95 focus:outline-none bg-orange-600" @click="activeTab ='SocialMediaPost'">Social Media Post</button>
      </div>
        <component :is="activeTab" />
      </div>
    </div>
    <Footer class="mt-10" />
  </div>
</template>

<script>
import Article from '@/components/DynamicComponent/Article.vue'
import Blogs from '@/components/DynamicComponent/Blogs.vue'
import BrandName from '@/components/DynamicComponent/BrandName.vue'
import SocialMediaPost from '@/components/DynamicComponent/SocialMediaPost.vue'
import ButtonSimple from '@/components/ButtonSimple.vue'
import Footer from '@/components/Footer.vue'
export default {
   components:{
     Article,
     BrandName,
     Blogs,
     SocialMediaPost,
     ButtonSimple,
     Footer
   },
   data(){
     return{
       activeTab:'Article',
     }
   }
}
</script>

