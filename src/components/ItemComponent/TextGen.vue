<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="bg-slate-200 p-6 h-96 drop-shadow-lg">
            <label class="form-label inline-block mb-2 text-gray-700">
                Context
            </label>
            <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-2xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            rows="3"
            placeholder="Your message"></textarea>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Language</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option selected>English</option>
            <option value="US">Spanish</option>
            <option value="CA">Bengali</option>
            <option value="FR">Italian</option>
            <option value="DE">Indonesian</option>
            </select>
            <button class="bg-red-700 p-2 mt-4 text-white font-bold rounded-full w-80">Write For Me!!</button>

        </div>
            <div class="col-span-2 shadow-lg p-6">
                <p class="mb-4 text-sm text">
                    Your text here..
                </p>
            </div>
        </div>  
</template>