<template>
  <div class="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto pt-4 px-4 pb-16">
    <!-- header -->
    <header class="flex justify-between">
      <div class="flex">
        <CogIcon class="h-8 text-neutral-500 mr-2" />
        <span class="text-zinc-100 text-2xl font-bold">TODAY</span>
      </div>
      <div>
        <PlusCircleIcon class="h-8 text-rose-600" />
      </div>
    </header>

    <!-- last 7 days section -->
    <div class="mt-4 flex flex-row-reverse justify-between">
      <div
        class="bg-neutral-600 rounded-lg py-1 flex flex-col items-center w-11"
        v-for="day in last7days"
        :key="last7days.indexOf(day)"
      >
        <h4 class="text-xl font-bold text-neutral-100">{{ day.format('D') }}</h4>
        <p class="text-sm text-neutral-300">{{ day.format('ddd') }}</p>
      </div>
    </div>

    <!-- main section -->
    <main class="mt-8">
      <div class="flex justify-between rounded-lg bg-neutral-600 p-2 mb-4">
        <div class="flex items-center">
          <div class="w-12 h-12 flex bg-rose-600 items-center justify-center rounded-full">
            <BookOpenIcon class="w-8 text-neutral-200" />
          </div>
          <div class="ml-3 flex flex-col">
            <span class="mb-1 text-xl font-bold text-neutral-200">READ</span>
            <div class="flex gap-1">
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <p class="text-neutral-300 mr-1 text-sm">1/1</p>
          <CheckCircleIcon class="font-bold w-12 text-rose-500" />
        </div>
      </div>
      <div class="flex justify-between rounded-lg bg-neutral-600 p-2">
        <div class="flex items-center">
          <div class="w-12 h-12 flex bg-blue-600 items-center justify-center rounded-full">
            <BookOpenIcon class="w-8 text-neutral-200" />
          </div>
          <div class="ml-3 flex flex-col">
            <span class="mb-1 text-xl font-bold text-neutral-200">CODE</span>
            <div class="flex gap-1">
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
              <div class="w-3 h-3 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <p class="text-neutral-300 mr-1 text-sm">0/1</p>
          <MinusCircleIcon class="font-bold w-12 text-blue-500" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { CogIcon } from '@heroicons/vue/24/outline';
import {
  PlusCircleIcon,
  BookOpenIcon,
  CheckCircleIcon,
  MinusCircleIcon,
} from '@heroicons/vue/24/solid';
import dayjs from 'dayjs';

const today = dayjs();

const last7days = [today];

for (let i = 1; i < 7; i++) {
  let res = today.subtract(i, 'day');
  last7days.push(res);
}

console.log('last7days', last7days);
</script>
