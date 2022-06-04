<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="bg-slate-200 h-96 w-96 drop-shadow-lg">
            <div class="flex flex-col border-b-2 p-6 border-slate-500 cursor-pointer hover:bg-zinc-300">
                <div class="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <h1 class="font-semibold pl-1">SMS And Notification</h1>
                </div>
                <p class="text-sm text-zinc-500">Lorem ipsum dolor sit amet.</p>
                <p class="text-sm text-zinc-500">5 hours ago</p>
            </div>         
            <div class="flex flex-col border-b-2 p-6 border-slate-500 cursor-pointer hover:bg-zinc-300">
                <div class="flex flex-row ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h1 class="font-semibold pl-1">Brand Name</h1>
                </div>
                <p class="text-sm text-zinc-500">Lorem ipsum dolor sit amet.</p>
                <p class="text-sm text-zinc-500">5 hours ago</p>
            </div>
        </div>
            <div class="col-span-2 shadow-lg p-6">
                <div class="flex flex-col">
                    <p class="form-label font-medium inline-block mb-2 text-gray-700">
                        Language
                    </p>
                    <p class="border-2 w-60 rounded-full p-1">Bangla</p>
                </div>
                <div class="flex flex-col">
                    <p class="form-label font-medium inline-block mb-2 text-gray-700">
                        Use Case
                    </p>
                    <div class="flex flex-row border-2 w-96 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <p>SMS & Notification</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <p class="form-label font-medium inline-block mb-2 text-gray-700">
                        Context
                    </p>
                    <p class="border-2 w-96 rounded-full p-1">Lorem ipsum dolor sit, amet consectetur</p>
                </div>
                <div class="flex flex-col">
                    <p class="form-label font-medium inline-block mb-2 text-gray-700">
                        Date
                    </p>
                    <p class="border-2 w-96 rounded-full p-1">Sat, June 4, 2022, 12:40 pm</p>
                </div>
                <button @click="back" class="bg-red-700 p-2 mt-4 text-white font-bold rounded-full w-32">Edit</button>
                <button class="bg-red-300 p-2 mt-4 text-white font-bold rounded-full w-32">Delete</button>
            </div>
    </div>  
    
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>