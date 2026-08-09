import React from 'react';
import { FaRegStar, FaStar, FaTrophy } from 'react-icons/fa6';

export default function MobileProductInfo({ product }) {
  return (
    <div className='flex flex-col gap-2 pt-2 px-3'>
      
      <div className="flex items-center gap-2 mb-1">
        <div className="flex items-center gap-1 text-[11px] text-gray-500">
           <FaTrophy className="text-blue-500 text-sm" /> 
           <span>Mobilya kategorisinde</span>
        </div>
        <div className="bg-orange-50 text-orange-500 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
          En Çok Favorilenen #2 <span className="text-[12px]">›</span>
        </div>
      </div>

      <p className='text-[16px] line-clamp-2 leading-snug'>
        <span className='font-semibold text-gray-900 mr-1'>{product.brand}</span>
        <span className='text-gray-800'>{product.name}</span>
      </p>

      <div className='flex items-center gap-1 text-yellow-400 text-[13px] whitespace-nowrap mt-1'>
        <span className='text-gray-900 text-[14px] mr-0.5 font-bold'>{product.rating}</span>
        {Array.from({ length: 5 }).map((_, index) =>
          index < product.rating ? (
            <FaStar key={index} />
          ) : (
            <FaRegStar key={index} className='text-gray-300' />
          )
        )}
        <p className='text-gray-500 flex items-center ml-1 text-[12px]'>
          <span>•</span>
          <span className='text-gray-800 mx-1 font-semibold'>{product.reviewCount}</span>
          <span>Değerlendirme</span>
          <span className='text-[14px] ml-1 opacity-80'>📷</span>
        </p>
      </div>

      <div className="flex items-center gap-1.5 mt-2">
        <span className="text-[16px]">🛒</span>
        <span className="text-[12px] text-gray-800"><span className="font-bold text-orange-500">1,3B kişinin</span> sepetinde, tükenmeden al!</span>
      </div>

    </div>
  );
}
