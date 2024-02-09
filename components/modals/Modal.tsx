import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, open, onClose }) => {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        open ? "fixed" : "hidden"
      } top-0 left-0 right-0 z-40 w-full p-4 overflow-x-hidden bg-opacity-75 bg-black overflow-y-auto md:inset-0 h-[100%] max-h-full flex justify-center items-center`}
      onClick={onClose}
    >
      <div className="relative w-full max-w-2xl max-h-full ">
        <div className="relative bg-white rounded-lg shadow ">
          {/* <!-- Modal body --> */}
          <div className="flex flex-col items-center rounded-b ">
          <button
  className="rounded-full border border-white absolute top-[-5%] right-[-10px] bg-red-500 z-50 text-3xl flex justify-center items-center text-white font-extrabold"
  onClick={onClose}
>
              <AiOutlineClose />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
