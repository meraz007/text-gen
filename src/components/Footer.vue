<template>
    <div class="mx-auto bg-gray-200 py-16 xl:px-20  px-4">
      <div class="grid grid-cols-2  xl:grid-cols-4 md:gap-8 gap-4">
        <div class="flex flex-col flex-shrink-0">
          <p class="text-sm leading-none text-gray-800 mt-4">Copyright © 2021 Text-Gen</p>
          <p class="text-sm leading-none text-gray-800 mt-4">All rights reserved</p>
          <div class="flex items-center gap-x-4 mt-12">
            <ButtonSimple class="bg-gray-800 rounded-full">
                <Linkedin />
            </ButtonSimple>
            <ButtonSimple class="bg-gray-800 rounded-full">
                <Youtube />
            </ButtonSimple>
            <ButtonSimple class="bg-gray-800 rounded-full">
                <twitter />
            </ButtonSimple>  
          </div>
        </div>
        <div class="sm:ml-0 ml-8 flex flex-col">
          <h2 class="text-base font-semibold leading-4 text-gray-800">Company</h2>
          <a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Blog</a>
          <a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Pricing</a>
          <a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">About Us</a>
          <a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Contact us</a>
          <a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Testimonials</a>
        </div>
        <div class="flex flex-col">
          <h2 class="text-base font-semibold leading-4 text-gray-800">Support</h2>
          <a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Legal policy</a>
          <a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Status policy</a>
          <a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Privacy policy</a>
          <a href="javascript:void(0)" class="focus:outline-none focus:underline hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Terms of service</a>
        </div>
        <div class="mt-10">
        <base-label for="text" class="text-xl font-medium leading-5 text-gray-800" value="Get updates" />
          <div class="cursor-pointer flex items-center justify-between border border-gray-800 mt-4">
            <base-input id="text" type="text" class="w-full rounded-none px-4 py-2"/>
            <button-simple class="text-gray-800"><Send /></button-simple>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseLabel from '@/components/BaseLabel.vue'
import Instagram from '@/components/Svg/instagram.vue'
import Linkedin from '@/components/Svg/Linkedin.vue'
import twitter from '@/components/Svg/twitter.vue'
import Youtube from '@/components/Svg/Youtube.vue'
import Send from '@/components/Svg/Send.vue'
import ButtonSimple from '@/components/ButtonSimple.vue'
export default {
    components:{
        Instagram,
        Linkedin,
        twitter,
        Youtube,
        Send,
        ButtonSimple,
        BaseInput,
        BaseLabel,
    }
}
</script>