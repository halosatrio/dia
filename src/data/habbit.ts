import { type ITEM_COLORS } from '@/config/constant';
import { ReactNode } from 'react';

export type habit = {
  title: string;
  id: string;
  color: ITEM_COLORS;
  isChecked: boolean;
  count: number;
  total: number;
  icon: ReactNode;
};

export const habitItems: habit[] = [
  {
    title: 'read',
    id: '001',
    color: 'rose',
    isChecked: true,
    count: 1,
    total: 1,
    icon: 'book',
  },
  {
    title: 'code',
    id: '002',
    color: 'sky',
    isChecked: false,
    count: 0,
    total: 1,
    icon: 'book',
  },
  {
    title: 'workout',
    id: '003',
    color: 'yellow',
    isChecked: false,
    count: 0,
    total: 1,
    icon: 'book',
  },
  {
    title: 'learn spanish',
    id: '004',
    color: 'lime',
    isChecked: true,
    count: 1,
    total: 1,
    icon: 'book',
  },
];
