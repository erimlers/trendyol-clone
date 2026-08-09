import React from 'react';
import { LuArrowUpDown } from "react-icons/lu";

export default function DesktopSortSelect() {
  return (
    <div className='flex items-center border border-gray-300 text-[14px] rounded-full px-4 py-1 hover:border-orange-500 cursor-pointer shrink-0 gap-5'>
      <select className='appearance-none outline-none cursor-pointer'>
        <option className='bg-white text-gray-700 '>Önerilen Sıralama</option>
        <option>En Düşük Fiyat</option>
        <option>En Yüksek Fiyat</option>
        <option>En Yeniler</option>
        <option>En Çok Satan</option>
        <option>En Favoriler</option>
        <option>En Çok Değerlendirilen</option>
      </select>
      <LuArrowUpDown className='text-orange-500 text-[16px] cursor-pointer' />
    </div>
  );
}
