import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';
import { PlusCircleIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import dayjs, { type Dayjs } from 'dayjs';
import { ReactNode, useEffect, useState } from 'react';
import HabitCard from '../components/HabitCard';

export type habit = {
  title: string;
  id: string;
  color: string;
  isChecked: boolean;
  count: number;
  total: number;
  icon: ReactNode;
};

// type HomeViewProps = {
//   items: Array<habit>;
// };

const habitItems: habit[] = [
  {
    title: 'read',
    id: '001',
    color: 'bg-rose-500',
    isChecked: true,
    count: 1,
    total: 1,
    icon: <BookOpenIcon className="w-8 text-neutral-200" />,
  },
  {
    title: 'code',
    id: '002',
    color: 'bg-blue-500',
    isChecked: false,
    count: 0,
    total: 1,
    icon: <BookOpenIcon className="w-8 text-neutral-200" />,
  },
  {
    title: 'workout',
    id: '003',
    color: 'bg-yellow-500',
    isChecked: false,
    count: 0,
    total: 1,
    icon: <BookOpenIcon className="w-8 text-neutral-200" />,
  },
  {
    title: 'learn spanish',
    id: '004',
    color: 'bg-lime-500',
    isChecked: true,
    count: 1,
    total: 1,
    icon: <BookOpenIcon className="w-8 text-neutral-200" />,
  },
];

const HomeView = () => {
  const [last7days, setLast7days] = useState<Dayjs[]>([]);

  useEffect(() => {
    const today = dayjs();
    const res = [today];
    for (let i = 1; i < 7; i++) {
      const temp = today.subtract(i, 'day');
      res.push(temp);
    }
    setLast7days(res);
  }, []);

  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto pt-4 px-4 pb-16">
      {/* header */}
      <header className="flex justify-between">
        <div className="flex">
          <Link to="/setting">
            <CogIcon className="h-8 text-neutral-500 mr-2" />
          </Link>
          <span className="text-zinc-100 text-2xl font-bold">TODAY</span>
        </div>
        <Link to="/edit/1">
          <PlusCircleIcon className="h-8 text-rose-600" />
        </Link>
      </header>

      {/* last 7 days section */}
      <div className="mt-4 flex flex-row-reverse justify-between">
        {last7days.length !== 0
          ? last7days.map((item, idx) => (
              <div
                className="bg-neutral-700 rounded-lg py-1 flex flex-col items-center w-11"
                key={idx}
              >
                <h4 className="text-xl font-bold text-neutral-100">{item.format('D')}</h4>
                <p className="text-sm text-neutral-300">{item.format('ddd')}</p>
              </div>
            ))
          : null}
      </div>

      {/* main section */}
      <main className="mt-8">
        {habitItems.map((habit) => (
          <HabitCard
            title={habit.title}
            id={habit.id}
            icon={habit.icon}
            color={habit.color}
            isChecked={habit.isChecked}
            count={habit.count}
            total={habit.total}
          />
        ))}
      </main>
    </div>
  );
};

export default HomeView;
