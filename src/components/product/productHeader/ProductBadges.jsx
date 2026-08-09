import React from 'react';
import { BsLightningFill } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { PiStorefrontBold } from "react-icons/pi";
import { RiBox3Fill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";

export default function ProductBadges() {

  return (
    <div className='flex gap-3 overflow-x-auto flex-1 min-w-0 scrollbar-none whitespace-nowrap'>
      <div className='flex items-center gap-1 bg-red-100 px-3 py-1 rounded-full cursor-pointer border border-white hover:border-red-500 shrink-0'>
        <BsLightningFill className='text-red-500 text-[19px]' />
        <span className='text-[14px]'>Flaş Ürünler</span>
      </div>
      <div className='flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full cursor-pointer border border-white hover:border-yellow-700 shrink-0'>
        <GoStarFill className='text-yellow-400 text-[19px]' />
        <span className='text-[14px]'>Yüksek Puanlı Ürünler</span>
      </div>
      <div className='flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full cursor-pointer border border-white hover:border-blue-500 shrink-0'>
        <PiStorefrontBold className='text-blue-600 text-[19px]' />
        <span className='text-[14px]'>Yüksek Puanlı Satıcılar</span>
      </div>
      <div className='flex items-center gap-1 bg-gray-100 px-3 py-[6px] rounded-full cursor-pointer border border-white hover:border-gray-500 shrink-0'>
        <RiBox3Fill className='text-gray-500 text-[19px]' />
        <span className='text-[14px]'>Kargo Bedava</span>
      </div>
      <div className='flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full cursor-pointer border border-white hover:border-green-500 shrink-0'>
        <FaShippingFast className='text-green-500 text-[19px]' />
        <span className='text-[14px]'>Hızlı Teslimat</span>
      </div>
    </div>
  );
}
