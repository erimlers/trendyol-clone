import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa';
import { RiBox3Fill } from "react-icons/ri";
import Link from 'next/link';
import { getDeviceType } from '@/utils/device';

async function ProductCard({ product }) {
  const { isDesktop } = await getDeviceType();
  
  return (
    <Link href={`/${product.id}`} target={`${isDesktop ? '_blank' : '_self'}`} className='border border-gray-300 rounded-lg hover:shadow-md transition-shadow flex flex-col cursor-pointer overflow-hidden h-full'>
      <div>
        <img src={product.image} className='object-cover w-full h-full aspect-[3/4]' />
      </div>
      <div className='bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold text-[10px] lg:text-[12px] flex items-center justify-center whitespace-nowrap'>
        <span className='truncate'>🏅 En Çok Satan 1. Ürün</span>
      </div>

      <div className='p-2 flex flex-col flex-1'>
        <p className='text-[13px] min-[1200px]:text-[14.5px] line-clamp-2 leading-tight'>
          <span className='font-semibold text-gray-900 mr-1'>{product.brand}</span>
          <span className='text-gray-600'>{product.name}</span>
        </p>
      </div>
      <div className='flex pl-1 whitespace-nowrap'>
        <span className='text-[11px] min-[1200px]:text-[12.5px] font-semibold truncate'>🚀 3 günde <span className='text-orange-500 truncate'>755 kişi</span> ekledi!</span>
      </div>
      <div className='flex items-center gap-0.5 text-yellow-400 text-[11.5px] pl-2 whitespace-nowrap'>
        <span className='text-gray-800 text-[11px] min-[1200px]:text-[13px] mr-1'>{product.rating}</span>
        {Array.from({ length: 5 }).map((_, index) =>
          index < product.rating ? (
            <FaStar key={index} />
          ) : (
            <FaRegStar key={index} className='text-gray-300' />
          ))}
        <span className='text-gray-800 text-[10px] min-[1200px]:text-[12px]'>({product.reviewCount}) 📷</span>
      </div>
      <div className='flex items-center'>
        <RiBox3Fill className='text-gray-500 text-[12px] min-[1200px]:text-[14px] ml-2' />
        <span className='text-gray-500 font-semibold text-[10.5px] min-[1200px]:text-[12.5px] ml-1'>Kargo Bedava</span>
      </div>
      <div className='mt-auto'>
        <p className='font-semibold text-[14px] min-[1200px]:text-[16px] text-orange-500 pl-2'>{product.price} TL</p>
      </div>

    </Link>
  )
}

export default ProductCard
