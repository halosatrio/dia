<template>
  <div class="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto py-4 pl-2 pr-4">
    <!-- header -->
    <header class="flex justify-between mb-6">
      <RouterLink to="/setting" class="flex items-center">
        <ChevronLeftIcon class="h-8 text-neutral-100 mr-2" />
        <span class="text-zinc-100 text-xl">Settings</span>
      </RouterLink>
      <div>
        <span class="text-zinc-100 text-xl">Done</span>
      </div>
    </header>

    <!-- main -->
    <main class="pl-2">
      <!-- title -->
      <h2 class="text-4xl text-zinc-100 font-bold mb-4">Sort Habits</h2>

      <!-- sort item -->
      <div class="rounded-xl bg-zinc-700 pl-4 py-2">
        <div class="flex py-1">
          <MinusCircleIcon class="h-8 text-red-500 mr-2 mb-3" />
          <div class="flex justify-between w-full items-center border-b border-neutral-600 pb-3">
            <p class="text-zinc-100 text-xl">Read</p>
            <ChevronDownIcon class="h-8 text-red-500 pr-4" />
          </div>
        </div>
        <div class="flex py-1">
          <MinusCircleIcon class="h-8 text-red-500 mr-2 mb-3" />
          <div class="flex justify-between w-full items-center border-b border-neutral-600 pb-3">
            <p class="text-zinc-100 text-xl">Code</p>
            <div class="flex">
              <ChevronUpIcon class="h-8 text-red-500 pr-4" />
              <ChevronDownIcon class="h-8 text-red-500 pr-4" />
            </div>
          </div>
        </div>
        <div class="flex py-1">
          <MinusCircleIcon class="h-8 text-red-500 mr-2 mb-3" />
          <div class="flex justify-between w-full items-center border-b border-neutral-600 pb-3">
            <p class="text-zinc-100 text-xl">Workout</p>
            <div class="flex">
              <ChevronUpIcon class="h-8 text-red-500 pr-4" />
              <ChevronDownIcon class="h-8 text-red-500 pr-4" />
            </div>
          </div>
        </div>
        <div class="flex py-1">
          <MinusCircleIcon class="h-8 text-red-500 mr-2" />
          <div class="flex justify-between w-full items-center">
            <p class="text-zinc-100 text-xl">Learn Spanish</p>
            <ChevronUpIcon class="h-8 text-red-500 pr-4" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  MinusCircleIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/solid';
import { RouterLink } from 'vue-router';
</script>
