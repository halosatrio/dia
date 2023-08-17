import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import dayjs, { type Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import HabitCard from '../components/HabitCard';
import { habitItems } from '@/data/habbit';

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
        <Link to="/add">
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
