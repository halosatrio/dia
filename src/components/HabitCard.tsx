import { BookOpenIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { habit } from '@/data/habbit';
import { BG_COLORS, TEXT_COLORS } from '@/config/constant';
import { useState } from 'react';

const HabitCard = (props: habit) => {
  const { title, id, color, total } = props;
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex justify-between rounded-lg bg-neutral-700 p-2 mb-4">
      <Link to={`detail/${id}`}>
        <div className="flex items-center">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${BG_COLORS[color]}`}
          >
            <BookOpenIcon className="w-8 text-neutral-200" />
          </div>
          <div className="ml-3 flex flex-col">
            <span className="text-xl font-bold text-neutral-200">{title.toUpperCase()}</span>
            <div className="flex gap-1 items-center">
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className={`w-4 h-4 rounded-full ${BG_COLORS[color]}`}></div>
              <div className="w-4 h-4 bg-neutral-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex items-center">
        <p className="text-neutral-300 mr-1 text-sm">{counter + '/' + total}</p>
        {counter === total ? (
          <button>
            <CheckCircleIcon className={`font-bold w-12 ${TEXT_COLORS[color]}`} />
          </button>
        ) : (
          <button onClick={() => setCounter((prev) => prev + 1)}>
            <PlusCircleIcon className={`font-bold w-12 ${TEXT_COLORS[color]}`} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HabitCard;
