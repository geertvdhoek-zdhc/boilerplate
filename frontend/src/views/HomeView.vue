<template>
  <div class="space-y-6">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Vue Boilerplate
      </h1>
      <p class="text-lg text-gray-600 mb-8">
        Vue 3 + TypeScript + Tailwind CSS + Supabase
      </p>
      
      <div class="flex justify-center space-x-4">
        <button class="btn-primary">
          Get Started
        </button>
        <button class="btn-secondary">
          Learn More
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div class="bg-white p-6 rounded-lg shadow-sm border">
        <h3 class="text-lg font-semibold mb-2">Vue 3</h3>
        <p class="text-gray-600">Latest Vue with Composition API</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border">
        <h3 class="text-lg font-semibold mb-2">TypeScript</h3>
        <p class="text-gray-600">Type-safe development</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border">
        <h3 class="text-lg font-semibold mb-2">Tailwind CSS</h3>
        <p class="text-gray-600">Utility-first CSS framework</p>
      </div>
    </div>
  </div>
</template>
