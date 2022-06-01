<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    
    <div class="font-bold text-xl mb-2">
      <header>
      <slot name="header"></slot>
    </header>
    </div>
    <p class="text-gray-700 text-base">
      <main>
    <slot></slot>
  </main>
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <footer>
    <slot name="footer"></slot>
  </footer>
  </div>
</div>
</template>