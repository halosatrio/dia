<template>
  <div class="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto">
    <div class="flex flex-col justify-between h-screen">
      <div class="px-4 pt-12">
        <div class="flex mb-6">
          <button class="p-3 rounded-lg mr-4 bg-neutral-700">
            <BookOpenIcon class="w-8 text-rose-600" />
          </button>
          <input
            class="rounded-lg bg-neutral-700 px-4 text-neutral-200 text-lg w-full"
            value="Read"
          />
        </div>
        <div class="py-4 pl-4 rounded-lg mr-4 bg-neutral-700 w-full">
          <div class="flex items-center">
            <!-- <button class="mr-4 p-2 mb-4 w-8 h-8 rounded-md bg-lime-500"></button> -->
            <div class="mr-4 p-1 mb-4 rounded-md bg-neutral-500">
              <FireIcon class="w-6 text-neutral-50" />
            </div>
            <div class="w-full text-neutral-50 pb-4 border-b border-neutral-600">1x per day</div>
          </div>
          <div class="flex mt-3 items-center">
            <div class="mr-4 p-1 rounded-md bg-neutral-500">
              <ArrowPathRoundedSquareIcon class="w-6 text-neutral-50" />
            </div>
            <div class="w-full text-neutral-50">7 days per</div>
          </div>
        </div>
        <div class="p-4 rounded-lg mr-4 bg-neutral-700 w-full mt-4">
          <div class="flex justify-between items-center">
            <div class="w-64">
              <CalendarDaysIcon class="w-8 text-neutral-500 inline" />
              <p class="ml-4 inline text-neutral-50">Start Date</p>
            </div>
            <div>
              <Datepicker dark v-model="date" :enable-time-picker="false" :format="format" />
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
      <div class="px-4 pt-4 pb-8 border-t border-neutral-600">
        <button class="bg-rose-600 text-neutral-50 py-4 w-full rounded-lg">
          <p class="mx-auto">SAVE</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  BookOpenIcon,
  TrashIcon,
  ArrowPathRoundedSquareIcon,
  FireIcon,
  CalendarDaysIcon,
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
