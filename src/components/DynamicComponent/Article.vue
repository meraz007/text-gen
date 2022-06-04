<template>
<div class="container mx-auto">
    <div class="grid grid-cols-4 gap-4 mt-5">
      <button
        @click="isOpen = true"
        
        type="button"
      >
        <Card />
      </button>
    <transition name="fade">
      <div v-show="isOpen" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div class="max-w-6xl h-5/6 bg-white rounded-md shadow-xl">
          <div class="flex justify-between p-4 text-white bg-red-900">
              <div class="grid gap-4 grid-cols-3">
                <button @click="activeTab ='TextGen'">TextGen</button>
                <button @click="activeTab ='History'">History</button>
                <button @click="activeTab ='Accounts'">Accounts</button>
            </div>
              <p class="cursor-pointer" @click="isOpen = false">X</p>
          </div>
            <component class="max-w-6xl" :is="activeTab" />
        </div>
      </div>
    </transition>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import TextGen from '@/components/ItemComponent/TextGen.vue'
import History from '@/components/ItemComponent/History.vue'
import Accounts from '@/components/ItemComponent/Accounts.vue'
export default {
    components:{
        Card,
        TextGen,
        History,
        Accounts,
    },
    data() {
        return {
        isOpen: false,
        activeTab:'TextGen'
        };
    },
    };
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>