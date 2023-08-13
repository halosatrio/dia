<template>
  <div class="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto flex flex-col justify-start">
    <!-- header back navigation -->
    <header class="pt-4 mb-8 ml-2">
      <RouterLink to="/detail/1" class="flex items-center">
        <ChevronLeftIcon class="h-8 text-neutral-100 mr-2" />
        <span class="text-zinc-100 text-xl">Back</span>
      </RouterLink>
    </header>

    <!-- main layout -->
    <main class="flex flex-col justify-between h-full">
      <!-- main content -->
      <div class="px-4">
        <div class="flex mb-6">
          <button class="p-3 rounded-lg mr-4 bg-neutral-700">
            <BookOpenIcon class="w-8 text-rose-500" />
          </button>
          <input
            class="rounded-lg bg-neutral-700 px-4 text-neutral-200 text-lg w-full"
            value="Read"
          />
        </div>
        <div class="py-4 pl-4 rounded-lg mr-4 bg-neutral-700 w-full">
          <div class="flex items-center">
            <div class="mr-4 p-1 mb-4 rounded-md bg-neutral-500">
              <FireIcon class="w-6 text-neutral-50" />
            </div>
            <div
              class="w-full flex justify-between text-neutral-50 pb-4 border-b border-neutral-600 items-center"
            >
              <p>1x per day</p>
              <div class="flex px-4 py-2 bg-neutral-500 rounded-md mr-2">
                <MinusIcon class="w-4 text-neutral-50 mr-3" />
                <div class="border-r border-neutral-600"></div>
                <PlusIcon class="w-4 text-neutral-50 ml-3" />
              </div>
            </div>
          </div>
          <div class="flex mt-3 items-center">
            <div class="mr-4 p-1 rounded-md bg-neutral-500">
              <ArrowPathRoundedSquareIcon class="w-6 text-neutral-50" />
            </div>
            <div class="w-full flex justify-between text-neutral-50 items-center">
              <p>7 days per</p>
              <div class="flex px-4 py-2 bg-neutral-500 rounded-md mr-2">
                <button>week</button>
                <MinusIcon class="w-4 text-neutral-50 mr-3" />
                <div class="border-r border-neutral-600"></div>
                <PlusIcon class="w-4 text-neutral-50 ml-3" />
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 rounded-lg mr-4 bg-neutral-700 w-full mt-4">
          <div class="flex justify-start items-center">
            <div class="mr-4 p-1 rounded-md bg-neutral-500">
              <CalendarDaysIcon class="w-6 text-neutral-50 inline" />
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-neutral-50">Start Date</p>
              <div class="w-44">
                <Datepicker
                  dark
                  v-model="date"
                  :enable-time-picker="false"
                  :format="format"
                  position="right"
                />
              </div>
            </div>
          </div>
        </div>
        <button class="p-4 rounded-lg mr-4 bg-neutral-700 w-full mt-4">
          <div class="flex text-rose-500">
            <TrashIcon class="w-6 mr-2" />
            <p class="text-lg">Delete</p>
          </div>
        </button>
      </div>

      <!-- footer save button -->
      <div class="px-4 pt-4 pb-8 border-t border-neutral-600">
        <button class="bg-rose-500 text-neutral-50 py-4 w-full rounded-lg">
          <p class="mx-auto">SAVE</p>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  BookOpenIcon,
  TrashIcon,
  ArrowPathRoundedSquareIcon,
  FireIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import dayjs from 'dayjs';

const format = (date: Date) => {
  return dayjs(date).format('DD MMM YYYY');
};

const date = ref(new Date());
</script>
