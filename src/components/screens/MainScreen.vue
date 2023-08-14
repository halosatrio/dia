<template>
  <div class="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto pt-4 px-4 pb-16">
    <!-- header -->
    <header class="flex justify-between">
      <div class="flex">
        <RouterLink to="/setting">
          <CogIcon class="h-8 text-neutral-500 mr-2" />
        </RouterLink>
        <span class="text-zinc-100 text-2xl font-bold">TODAY</span>
      </div>
      <RouterLink to="/edit/1">
        <PlusCircleIcon class="h-8 text-rose-600" />
      </RouterLink>
    </header>

    <!-- last 7 days section -->
    <div class="mt-4 flex flex-row-reverse justify-between">
      <div
        class="bg-neutral-700 rounded-lg py-1 flex flex-col items-center w-11"
        v-for="day in last7days"
        :key="last7days.indexOf(day)"
      >
        <h4 class="text-xl font-bold text-neutral-100">{{ day.format('D') }}</h4>
        <p class="text-sm text-neutral-300">{{ day.format('ddd') }}</p>
      </div>
    </div>

    <!-- main section -->
    <main class="mt-8">
      <HabitCard
        v-for="habit in habitItems"
        :key="habit.id"
        :title="habit.title"
        :route="habit.id"
        :color="habit.color"
        :is-checked="habit.isChecked"
        :count="habit.count"
        :total="habit.total"
      >
        <template #icon>
          <BookOpenIcon class="w-8 text-neutral-200" />
        </template>
      </HabitCard>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { CogIcon } from '@heroicons/vue/24/outline';
import { PlusCircleIcon, BookOpenIcon } from '@heroicons/vue/24/solid';
import dayjs from 'dayjs';
import HabitCard from '../HabitCard.vue';

const today = dayjs();

const last7days = [today];

for (let i = 1; i < 7; i++) {
  let res = today.subtract(i, 'day');
  last7days.push(res);
}

type habit = Array<{
  title: string;
  id: string;
  color: string;
  isChecked: boolean;
  count: number;
  total: number;
}>;

const habitItems: habit = [
  {
    title: 'read',
    id: '001',
    color: 'rose-500',
    isChecked: true,
    count: 1,
    total: 1,
  },
  {
    title: 'code',
    id: '002',
    color: 'blue-500',
    isChecked: false,
    count: 0,
    total: 1,
  },
  {
    title: 'workout',
    id: '003',
    color: 'yellow-500',
    isChecked: false,
    count: 0,
    total: 1,
  },
  {
    title: 'learn spanish',
    id: '004',
    color: 'lime-500',
    isChecked: true,
    count: 1,
    total: 1,
  },
];

// console.log('last7days', last7days);
</script>
