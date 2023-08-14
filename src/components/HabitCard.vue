<template>
  <RouterLink
    :to="'detail/' + props.route"
    class="flex justify-between rounded-lg bg-neutral-700 p-2 mb-4"
  >
    <div class="flex items-center">
      <div
        class="w-12 h-12 flex items-center justify-center rounded-full"
        :class="'bg-' + props.color"
      >
        <slot name="icon"></slot>
      </div>
      <div class="ml-3 flex flex-col">
        <span class="text-xl font-bold text-neutral-200">{{ props.title.toUpperCase() }}</span>
        <div class="flex gap-1 items-center">
          <div class="w-4 h-4 rounded-full" :class="'bg-' + props.color"></div>
          <div class="w-4 h-4 rounded-full" :class="'bg-' + props.color"></div>
          <div class="w-4 h-4 rounded-full" :class="'bg-' + props.color"></div>
          <div class="w-4 h-4 rounded-full" :class="'bg-' + props.color"></div>
          <div class="w-4 h-4 bg-neutral-500 rounded-full"></div>
          <div class="w-4 h-4 bg-neutral-500 rounded-full"></div>
          <div class="w-4 h-4 bg-neutral-500 rounded-full"></div>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <p class="text-neutral-300 mr-1 text-sm">{{ props.count + '/' + props.total }}</p>
      <CheckCircleIcon
        v-if="props.isChecked"
        class="font-bold w-12"
        :class="'text-' + props.color"
      />
      <MinusCircleIcon v-else class="font-bold w-12" :class="'text-' + props.color" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
import { MinusCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
  title: string;
  route: string;
  color: string;
  isChecked: boolean;
  count: number;
  total: number;
}>();
</script>
