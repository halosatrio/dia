import { BG_COLORS, COLORS, ITEM_COLORS } from '@/config/constant';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { ReactElement, useState } from 'react';

type IconModalProps = {
  children: ReactElement;
};

const Modal = ({ children }: IconModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ITEM_COLORS>('red');
  return (
    <>
      <button
        className="p-3 rounded-lg mr-4 bg-neutral-700 focus:outline-none ease-linear transition-all duration-150"
        onClick={() => setShowModal(true)}
      >
        {children}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none">
                {/* header exit button */}
                <div className="flex items-start justify-between p-3 rounded-t">
                  <button
                    className="mb-4 ml-auto float-right text-3xl outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <XCircleIcon className="h-8 text-neutral-100" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-3 mb-5 flex-auto rounded-b">
                  {/* select color */}
                  <div className="rounded-lg bg-neutral-700 py-3 px-1 w-full flex justify-around">
                    {COLORS.map((color) => (
                      <button
                        key={color}
                        className={`w-6 h-6 rounded-full ${BG_COLORS[color]}`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color === selectedColor ? (
                          <div className="w-3 h-3 bg-neutral-700 rounded-full m-auto"></div>
                        ) : null}
                      </button>
                    ))}
                  </div>
                  <div className="rounded-lg bg-neutral-700 mt-3 py-3 px-3 w-full flex justify-around">
                    <p className="text-slate-500 text-lg leading-relaxed">
                      I always felt like I could do anything. That’s the main thing people are
                      controlled by! Thoughts- their perception of themselves! They're slowed down
                      by their perception of themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
