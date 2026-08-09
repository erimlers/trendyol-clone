'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { PiList } from "react-icons/pi";
import { IoSearch, IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FiChevronLeft } from "react-icons/fi";

function MobileHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const isProductDetail = pathname !== '/';

  return (
    <div className='sticky top-0 z-50 border-b border-gray-200 w-full bg-white'>
      <header className='flex flex-col mx-auto px-2 py-1 gap-1 w-full'>
        <div className='flex items-center w-full justify-between gap-2 mt-2 mb-1.5 h-8'>

          {!isProductDetail ? (
            <>
              <div className='flex gap-4 items-center flex-shrink-0 cursor-pointer w-auto'>
                <PiList className='text-2xl text-gray-800' />
                <Image src="https://www.freeiconspng.com/uploads/hd-trendyol-text-logo-high-quality-png-27.png" alt="Trendyol Logo" width={100} height={40} />
              </div>
              
              <div className='flex gap-4.5 cursor-pointer flex-shrink-0'>
                <div className='flex items-center gap-[2px] hover:text-orange-500'>
                  <IoSearch className='text-[21.5px]' />
                </div>
                <div className='flex items-center gap-[2px] hover:text-orange-500'>
                  <IoPersonOutline className='text-[21.5px]' />
                </div>
                <div className='flex items-center gap-[2px] hover:text-orange-500 '>
                  <IoHeartOutline className='text-[22px]' />
                </div>
                <div className='flex items-center gap-[2px] hover:text-orange-500'>
                  <FaCartShopping className='text-[21.5px]' />
                </div>
              </div>
            </>
          ) : (
            <>
              <div 
                className='flex items-center flex-shrink-0 cursor-pointer pl-0.5 pr-1.5'
                onClick={() => router.push('/')}
              >
                <FiChevronLeft className='text-[26px] text-gray-800' />
              </div>

              <div className='flex flex-1 items-center gap-2 bg-gray-100 px-2.5 py-1.5 rounded-full cursor-pointer'>
                <IoSearch className='text-orange-500 text-xl flex-shrink-0' />
                <input className="text-gray-500 text-[13px] truncate" placeholder='Ürün, kategori...'/>
              </div>

              <div className='flex gap-3.5 cursor-pointer flex-shrink-0 ml-1'>
                <div className='flex items-center gap-[2px] hover:text-orange-500'>
                  <IoPersonOutline className='text-[22px]' />
                </div>
                <div className='flex items-center gap-[2px] hover:text-orange-500'>
                  <IoHeartOutline className='text-[22px]' />
                </div>
                <div className='flex items-center gap-[2px] hover:text-orange-500'>
                  <FaCartShopping className='text-[22px]' />
                </div>
              </div>
            </>
          )}

        </div>
      </header>
    </div>
  );
}

export default MobileHeader;
