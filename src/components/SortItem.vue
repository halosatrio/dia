<template>
  <div class="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto pt-4 px-4 pb-16">
    <!-- header -->
    <header class="flex justify-between mb-6">
      <div class="flex items-center">
        <ChevronLeftIcon class="h-8 text-neutral-100 mr-2" />
        <span class="text-zinc-100 text-xl">Settings</span>
      </div>
      <div>
        <span class="text-zinc-100 text-xl">Done</span>
      </div>
    </header>

    <!-- main -->
    <main class="px-4">
      <!-- title -->
      <h2 class="text-4xl text-zinc-100 font-bold mb-4">Sort Habits</h2>

      <Draggable
        :list="list"
        :disabled="!enabled"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
      >
        <template #item="{ element }">
          <div
            class="list-group-item text-xl text-neutral-100"
            :class="{ 'not-draggable': !enabled }"
          >
            {{ element.name }}
          </div>
        </template>
      </Draggable>

      <!-- sort item -->
      <div class="rounded-xl bg-zinc-700 pl-4 py-2">
        <div class="flex py-1">
          <MinusCircleIcon class="h-8 text-red-500 mr-2" />
          <div class="flex justify-between w-full items-center border-b border-neutral-600 pb-3">
            <p class="text-zinc-100 text-xl">Read</p>
            <ChevronDownIcon class="h-8 text-red-500 pr-4" />
          </div>
        </div>
        <div class="flex py-1">
          <MinusCircleIcon class="h-8 text-red-500 mr-2" />
          <div class="flex justify-between w-full items-center border-b border-neutral-600 pb-3">
            <p class="text-zinc-100 text-xl">Code</p>
            <ChevronDownIcon class="h-8 text-red-500 pr-4" />
          </div>
        </div>
        <div class="flex py-1">
          <MinusCircleIcon class="h-8 text-red-500 mr-2" />
          <div class="flex justify-between w-full items-center border-b border-neutral-600 pb-3">
            <p class="text-zinc-100 text-xl">Workout</p>
            <ChevronDownIcon class="h-8 text-red-500 pr-4" />
          </div>
        </div>
        <div class="flex py-1">
          <MinusCircleIcon class="h-8 text-red-500 mr-2" />
          <div class="flex justify-between w-full items-center">
            <p class="text-zinc-100 text-xl">Learn Spanish</p>
            <ChevronDownIcon class="h-8 text-red-500 pr-4" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { MinusCircleIcon, ChevronLeftIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';
import Draggable from 'vuedraggable';

let enabled = true;
let list = [
  { name: 'John', id: 0 },
  { name: 'Joao', id: 1 },
  { name: 'Jean', id: 2 },
];
let dragging = false;

const checkMove = function (e: any) {
  window.console.log('Future index: ' + e.draggedContext.futureIndex);
};

console.log('list', list);
</script>
