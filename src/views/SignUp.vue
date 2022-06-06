<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-2xl md:w-2/5 lg:w-2/5 sm:w-2/5">
        <h3 class="text-2xl font-bold">Start for Free Today</h3>
        <p>Access to all features. No credit card required.</p>
        <form action="">
            <div class="mt-6">
                <div>
                    <base-label for="name" value="Name" />
                    <base-input id="name" type="text" class="w-full px-4 py-2 mt-2"/>
                </div>
                <div class="mt-4">
                    <base-label for="email" value="Email" />
                    <base-input id="email" type="email" class="w-full px-4 py-2 mt-2"/>
                </div>
                <div class="mt-4">
                    <base-label for="password" value="Password" />
                    <base-input id="password" type="password" class="w-full px-4 py-2 mt-2"/>
                </div>
                <div class="mt-4">
                    <base-label for="ConfirmPassword" value="Password" />
                    <base-input id="ConfirmPassword" type="password" class="w-full px-4 py-2 mt-2"/>
                </div>
                <div class="flex">
                    <button-simple class="w-full px-6 py-4 mt-2 bg-blue-600 hover:bg-blue-900 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring focus:ring-blue-300">Create Account</button-simple>
                </div>
                <div class="mt-6 text-grey-dark">
                    Already have an account?
                    <router-link to="/signin" class="text-blue-600 hover:underline">
                        Log in
                    </router-link>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseLabel from '@/components/BaseLabel.vue'
import ButtonSimple from '@/components/ButtonSimple.vue'

export default {
    components:{
        BaseInput,
        BaseLabel,
        ButtonSimple
    }
}
</script>

<style>

</style>