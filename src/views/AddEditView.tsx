import {
  BookOpenIcon,
  TrashIcon,
  ArrowPathRoundedSquareIcon,
  FireIcon,
  CalendarDaysIcon,
  ChevronLeftIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const AddEditView = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full max-w-[480px] h-screen bg-zinc-800 my-0 mx-auto flex flex-col justify-start">
      {/* <!-- header back navigation --> */}
      <header className="pt-4 mb-8 ml-2">
        <button onClick={goBack} className="flex items-center">
          <ChevronLeftIcon className="h-8 text-neutral-100 mr-2" />
          <span className="text-zinc-100 text-xl">Back</span>
        </button>
      </header>

      {/* <!-- main layout --> */}
      <main className="flex flex-col justify-between h-full">
        {/* <!-- main content --> */}
        <div className="px-4">
          <div className="flex mb-6">
            <button className="p-3 rounded-lg mr-4 bg-neutral-700">
              <BookOpenIcon className="w-8 text-rose-500" />
            </button>
            <input
              className="rounded-lg bg-neutral-700 px-4 text-neutral-200 text-lg w-full"
              value="Read"
            />
          </div>
          <div className="py-4 pl-4 rounded-lg mr-4 bg-neutral-700 w-full">
            <div className="flex items-center">
              <div className="mr-4 p-1 mb-4 rounded-md bg-neutral-500">
                <FireIcon className="w-6 text-neutral-50" />
              </div>
              <div className="w-full flex justify-between text-neutral-50 pb-4 border-b border-neutral-600 items-center">
                <p>1x per day</p>
                <div className="flex px-4 py-2 bg-neutral-500 rounded-md mr-2">
                  <MinusIcon className="w-4 text-neutral-50 mr-3" />
                  <div className="border-r border-neutral-600"></div>
                  <PlusIcon className="w-4 text-neutral-50 ml-3" />
                </div>
              </div>
            </div>
            <div className="flex mt-3 items-center">
              <div className="mr-4 p-1 rounded-md bg-neutral-500">
                <ArrowPathRoundedSquareIcon className="w-6 text-neutral-50" />
              </div>
              <div className="w-full flex justify-between text-neutral-50 items-center">
                <p>7 days per</p>
                <div className="flex px-4 py-2 bg-neutral-500 rounded-md mr-2">
                  <button>week</button>
                  <MinusIcon className="w-4 text-neutral-50 mr-3" />
                  <div className="border-r border-neutral-600"></div>
                  <PlusIcon className="w-4 text-neutral-50 ml-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-lg mr-4 bg-neutral-700 w-full mt-4">
            <div className="flex justify-start items-center">
              <div className="mr-4 p-1 rounded-md bg-neutral-500">
                <CalendarDaysIcon className="w-6 text-neutral-50 inline" />
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-neutral-50">Start Date</p>
                <div className="w-44">
                  {/* <Datepicker
                  dark
                  v-model="date"
                  :enable-time-picker="false"
                  :format="format"
                  position="right"
                /> */}
                </div>
              </div>
            </div>
          </div>
          <button className="p-4 rounded-lg mr-4 bg-neutral-700 w-full mt-4">
            <div className="flex text-rose-500">
              <TrashIcon className="w-6 mr-2" />
              <p className="text-lg">Delete</p>
            </div>
          </button>
        </div>

        {/* <!-- footer save button --> */}
        <div className="px-4 pt-4 pb-8 border-t border-neutral-600">
          <button className="bg-rose-500 text-neutral-50 py-4 w-full rounded-lg">
            <p className="mx-auto">SAVE</p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddEditView;
