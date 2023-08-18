import { type ITEM_COLORS } from '@/config/constant';
import { ReactNode } from 'react';

export type habit = {
  title: string;
  id: string;
  color: ITEM_COLORS;
  isChecked?: boolean;
  count?: number;
  total: number;
  icon?: ReactNode;
};

export const habitData: { [key: string]: habit } = {
  '001': {
    title: 'read',
    id: '001',
    color: 'rose',
    isChecked: true,
    count: 1,
    total: 1,
    icon: 'book',
  },
  '002': {
    title: 'code',
    id: '002',
    color: 'sky',
    isChecked: false,
    count: 0,
    total: 1,
    icon: 'book',
  },
  '003': {
    title: 'workout',
    id: '003',
    color: 'yellow',
    isChecked: false,
    count: 0,
    total: 1,
    icon: 'book',
  },
  '004': {
    title: 'learn spanish',
    id: '004',
    color: 'lime',
    isChecked: true,
    count: 1,
    total: 1,
    icon: 'book',
  },
};
