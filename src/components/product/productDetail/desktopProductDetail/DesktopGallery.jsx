import React from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function DesktopGallery({ product }) {

  return (
    <div className='flex flex-col w-[480px] flex-shrink-0'>

      <div className='relative w-full aspect-[3/4] border border-gray-100 rounded-md overflow-hidden'>
        <Image 
          src={product?.image} 
          alt={product?.name || "Product"} 
          fill
          className='object-contain'
        />

        <div className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center border border-gray-200">
          <FiChevronLeft className="text-2xl text-gray-700"/>
        </div>
        <div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center border border-gray-200">
          <FiChevronRight className="text-2xl text-gray-700"/>
        </div>
      </div>

      
    </div>
  );
}
