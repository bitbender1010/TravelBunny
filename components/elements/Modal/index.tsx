import Link from 'next/link';
import React from 'react';
import { BsClipboardPlus, BsPlusCircle } from 'react-icons/bs';

type Props = {
  open: boolean;
};

const Modal = ({ open }: Props) => (
  <div className='modal w-[220px] border z-50 fixed left-[80%] bottom-[8.5rem] rounded-xl bg-[#FF385C] text-white'>
    {open && (
      <div className='flex flex-col justify-center space-y-2'>
        <Link
          href='/create'
          className='flex items-center py-4 pl-4 space-x-2 hover:bg-[#ff4d6d] rounded-xl'
        >
          <BsPlusCircle size={30} />
          <span className='text-lg font-semibold'>Create Trip</span>
        </Link>

        <Link
          href='/attribute'
          className='flex items-center py-4 pl-4 space-x-2 hover:bg-[#ff4d6d] rounded-xl'
        >
          <BsClipboardPlus size={30} />
          <span className='text-lg font-semibold'>Post Attraction</span>
        </Link>
      </div>
    )}
  </div>
);

export default Modal;