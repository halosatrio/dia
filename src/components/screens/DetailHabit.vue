<template>
  <div class="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto">
    <!-- header -->
    <header class="flex justify-between bg-rose-600 h-20 px-5">
      <div class="flex items-center">
        <div class="w-12 h-12 flex bg-neutral-200 items-center justify-center rounded-full">
          <BookOpenIcon class="w-8 text-rose-600" />
        </div>
        <span class="ml-3 text-2xl font-bold text-neutral-200">READ</span>
      </div>
      <button class="text-xl font-bold text-neutral-200">
        <RouterLink to="/">Home</RouterLink>
      </button>
    </header>

    <main class="flex flex-col justify-between h-5/6">
      <!-- section 1 -->
      <section class="p-4">
        <div class="rounded-xl bg-zinc-700 px-2 py-3 grid grid-cols-3 mb-4">
          <div class="border-r pr-1 border-neutral-600 flex flex-col items-center">
            <p class="text-rose-500 font-bold">
              {{ dayjs().format('MMM DD, YYYY') }}
            </p>
            <p class="text-neutral-400 text-xs">STARTED</p>
          </div>
          <div class="border-r border-neutral-600 flex flex-col items-center">
            <p class="text-rose-500 font-bold">1x</p>
            <p class="text-neutral-400 text-xs">PER DAY</p>
          </div>
          <div class="flex flex-col items-center">
            <p class="text-rose-500 font-bold">7 days</p>
            <p class="text-neutral-400 text-xs">PER WEEK</p>
          </div>
        </div>

        <!-- section 2 -->
        <div class="grid grid-cols-2 gap-2 mb-2">
          <div class="rounded-xl bg-zinc-700 py-2 px-3">
            <p class="text-neutral-200 font-bold">Score</p>
            <p class="text-rose-500 mt-4">LINE GRAPH</p>
          </div>
          <div class="rounded-xl bg-zinc-700 py-2 px-3">
            <p class="text-neutral-200 font-bold">Best Day</p>
            <p class="text-rose-500 mt-4">BAR GRAPH</p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 mb-4">
          <div class="rounded-xl bg-zinc-700 py-2 px-3">
            <p class="text-neutral-200 font-bold mb-4">Goal Reached</p>
            <span class="text-rose-500 font-bold text-4xl">263</span
            ><span class="text-neutral-200 ml-1 text-xl font-bold">days</span>
          </div>
          <div class="rounded-xl bg-zinc-700 py-2 px-3">
            <p class="text-neutral-200 font-bold mb-4">Daily Average</p>
            <span class="text-rose-500 font-bold text-4xl">0.9</span
            ><span class="text-neutral-200 ml-1 text-xl font-bold">times</span>
          </div>
        </div>

        <!-- section 3: heatmap [HIDE FOR NOW] -->
        <!-- <div class="rounded-xl bg-zinc-700 py-3 px-4 mb-4">
        <p class="text-neutral-200 font-bold mb-4">Last 6 Months</p>
        <CalendarHeatmap :values="res" :end-date="dayjs().format('YYYY-MM-DD')" :tooltip="false" />
      </div> -->

        <!-- section 4: calendar -->
        <div class="rounded-xl bg-zinc-700 py-3 px-4 mb-4">
          <p class="text-neutral-200 font-bold mb-4">Calendar</p>
          <Calendar transparent borderless expanded is-dark />
        </div>
      </section>

      <!-- footer save button -->
      <div class="px-4 pt-4 pb-8 border-t border-neutral-600">
        <RouterLink to="/edit/1">
          <button class="bg-rose-500 text-neutral-50 py-4 w-full rounded-lg mx-auto">EDIT</button>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Calendar } from 'v-calendar';
import 'v-calendar/style.css';
// import { CalendarHeatmap } from 'vue3-calendar-heatmap';

import { BookOpenIcon } from '@heroicons/vue/24/solid';

import dayjs from 'dayjs';

let currentMonth = dayjs().month();
let last2month = dayjs().subtract(2, 'month').month();

interface ObjProps {
  date: string;
  count: number;
}

let res: Array<ObjProps> = [];
for (let m = last2month; m < currentMonth; m++) {
  let lastDateOfMonth = dayjs().month(m).endOf('month');
  for (let d = 1; d <= lastDateOfMonth.date(); d++) {
    let obj: ObjProps = { date: '', count: 1 };
    obj.date = dayjs().month(m).date(d).format('YYYY-MM-DD');
    res.push(obj);
  }
}

// console.log('res', res);

// console.log('now', now);
// console.log('currentMonth', currentMonth);
// console.log('last2month', last2month);
</script>
