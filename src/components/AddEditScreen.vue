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
          <div class="flex">
            <button class="mr-4 p-2 mb-4 w-8 h-8 rounded-md bg-lime-500"></button>
            <div class="w-full flex pb-4 justify-between border-b border-neutral-600">hehehe</div>
          </div>
          <div class="flex mt-4">
            <button class="mr-4 p-2 w-8 h-8 rounded-md bg-lime-500"></button>
            <div class="w-full flex justify-between">hehehe</div>
          </div>
        </div>
        <div class="p-4 rounded-lg mr-4 bg-neutral-700 w-full mt-4">
          <div class="flex justify-between">
            <div class="w-48">
              <BookOpenIcon class="w-8 text-rose-600 inline" />
              <p class="ml-4 inline text-neutral-50">Start Date</p>
            </div>
            <div>
              <Datepicker v-model="date" />
              <!-- <input type="date" /> -->
            </div>
          </div>
        </div>
        <button class="p-4 rounded-lg mr-4 bg-neutral-700 w-full mt-4">
          <div class="flex text-rose-600">
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
import { BookOpenIcon, TrashIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref();
</script>
