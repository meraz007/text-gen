<template>
    <div class="h-screen flex items-center bg-gray-100 justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full bg-white shadow-lg rounded-2xl px-8 py-6 mx-4 mt-4 text-left space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
      </p>
    </div>
    <form class="mt-8 space-y-6">
        <div>
          <base-label for="email" value="Email Address" />
          <base-input id="email" type="email" class="w-full px-4 py-2 mt-2"/>
        </div>
        <div>
          <base-label for="password" value="Password" />
          <base-input id="password" type="password" class="w-full px-4 py-2 mt-2"/>
        </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <base-checkbox />
          <base-label for="password" class="px-2" value="Remember me" />
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
        </div>
      </div>

      <div>
        <button-simple class="w-full px-6 py-4 mt-2 bg-blue-600 hover:bg-blue-900 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring focus:ring-blue-300">Sign In</button-simple>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseLabel from '@/components/BaseLabel.vue'
import ButtonSimple from '@/components/ButtonSimple.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'

export default {
    components:{
        BaseInput,
        BaseLabel,
        ButtonSimple,
        BaseCheckbox
    }
}
</script>