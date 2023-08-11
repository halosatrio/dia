<template>
  <div class="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto px-4 pt-4">
    <div class="flex flex-col justify-between h-screen">
      <!-- header -->
      <header class="flex justify-between mb-6 -ml-2">
        <RouterLink to="/setting" class="flex items-center">
          <ChevronLeftIcon class="h-8 text-neutral-100 mr-2" />
          <span class="text-zinc-100 text-xl">Settings</span>
        </RouterLink>
      </header>

      <main class="text-neutral-100 text-center">
        i build this app to practice and to replace my main habit tracker apps. thanks to Forte -
        habit tracker apps by Collin Daugherty
      </main>

      <!-- footer -->
      <footer class="px-4 pt-4 pb-8">
        <p class="text-neutral-50 text-center text-sm font-bold">
          CREATED WITH
          <HeartIcon class="h-4 text-rose-600 inline" /> BY
          <a href="https://bayubit.dev" target="_blank" class="text-sky-500">SATRIO BAYU</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, HeartIcon } from '@heroicons/vue/24/solid';
</script>
