import React from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";

export default function MobileGallery({ product }) {
  return (
    <div className='relative w-full aspect-[3/4]'>
      <Image 
        src={product?.image} 
        alt={product?.name || "Ürün Görseli"} 
        fill
      />

      <div className="absolute top-2 right-2 flex flex-col gap-2">
         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer border border-gray-100">
            <IoHeartOutline className="text-gray-800 text-xl" />
         </div>
         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer border border-gray-100">
            <IoShareSocialOutline className="text-gray-800 text-xl" />
         </div>
      </div>
      
      <div className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer w-8 h-8 bg-white/70 rounded-full flex items-center justify-center">
        <FiChevronLeft className="text-xl text-gray-800"/>
      </div>
      <div className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer w-8 h-8 bg-white/70 rounded-full flex items-center justify-center">
        <FiChevronRight className="text-xl text-gray-800"/>
      </div>

    </div>
  );
}
