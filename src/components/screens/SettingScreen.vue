<template>
  <div class="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto px-4 pt-6">
    <!-- title -->
    <header>
      <h2 class="text-4xl text-zinc-100 font-bold mb-8">Settings</h2>
    </header>

    <!-- main -->
    <main>
      <div class="rounded-xl bg-zinc-700 pl-4 py-4">
        <RouterLink to="/setting/sort" class="flex w-full mb-4">
          <div class="w-8 h-8 bg-zinc-500 mr-3 rounded-md p-1">
            <RectangleStackIcon class="h-6 text-zinc-100" />
          </div>
          <div
            class="flex justify-between w-full items-center border-b border-neutral-600 pb-4 mt-0.5"
          >
            <p class="text-zinc-100 text-xl">Sort Habits</p>
            <ChevronRightIcon class="h-7 text-zinc-100 pr-2" />
          </div>
        </RouterLink>
        <RouterLink to="/about" class="flex w-full">
          <div class="w-8 h-8 bg-zinc-500 mr-3 rounded-md p-1">
            <InformationCircleIcon class="h-6 text-zinc-100" />
          </div>
          <div class="flex justify-between w-full items-center mt-0.5">
            <p class="text-zinc-100 text-xl">About</p>
            <ChevronRightIcon class="h-7 text-zinc-100 pr-2" />
          </div>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  RectangleStackIcon,
  ChevronRightIcon,
  InformationCircleIcon,
} from '@heroicons/vue/24/solid';
import { RouterLink } from 'vue-router';
</script>
