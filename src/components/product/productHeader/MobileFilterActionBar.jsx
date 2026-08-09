'use client'
import React, { useState } from 'react';
import { LuArrowUpDown } from "react-icons/lu";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import MobileFilterBar from '../../filter/mobileFilterBar/MobileFilterBar';

export default function MobileFilterActionBar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='flex border-b border-t border-gray-200 cursor-pointer justify-around'>
      <div className='flex gap-2 items-center py-2' >
        <LuArrowUpDown className='text-orange-500 text-[16px]' />
        <span className='text-[13px] font-semibold text-gray-800'>Önerilen Sıralama</span>
      </div>
      <div className='flex gap-2 items-center ' onClick={() => setIsOpen(true)}>
        <TbAdjustmentsHorizontal className='text-orange-500 text-[16px]' />
        <span className='text-[13px] text-gray-800 font-semibold'>Filtrele</span>
      </div>
      {isOpen && <MobileFilterBar setIsOpen={setIsOpen} />}
    </div>
  );
}
