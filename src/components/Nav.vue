<template>
    <div class="container mx-auto">
    <div class="lg:gap-4 lg:flex">
      <ButtonSimple class="bg-blue-500">Primary</ButtonSimple>
      <ButtonSimple class="bg-red-700">Secondary</ButtonSimple>
      <ButtonSimple class="bg-orange-600">Success</ButtonSimple>
      <ButtonSimple class="bg-amber-800">Danger</ButtonSimplE>
      <ButtonSimple class="bg-lime-700">Warning</ButtonSimple>
      <ButtonSimple class="bg-green-800">Info</ButtonSimple>
      <ButtonSimple class="bg-emerald-800">Light</ButtonSimple>
      <ButtonSimple class="bg-sky-700">Dark</ButtonSimple>
    </div>
  </div>
</template>

<script>
import ButtonSimple from '@/components/ButtonSimple.vue'
export default {
    components:{
        ButtonSimple
    }
}
</script>