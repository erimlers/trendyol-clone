"use client"
import React from 'react';
import Image from 'next/image';
import { PiList } from "react-icons/pi";
import { MdHeadsetMic } from "react-icons/md";
import { IoSearch, IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { categories } from '@/constants';
import {useRouter} from 'next/navigation';

function DesktopHeader() {
  const router = useRouter();
  return (
    <div className='border-b border-gray-200'>
      {/* Top Links - Sabit Masaüstü Görünümü */}
      <div className='hidden min-[1200px]:flex gap-8 text-[12px] justify-end text-gray-600 cursor-pointer mt-0.5 px-8'>
        <span>İndirim Kuponlarım</span>
        <span>Trendyol'da Satış Yap</span>
        <span>Hakkımızda</span>
        <span className='flex items-center gap-1'><MdHeadsetMic className='text-sm' /> Yardım & Destek</span>
      </div>

      <div className='sticky top-0 z-50 w-full bg-white'>
        <header className='flex flex-col mx-auto px-9 py-0 gap-1 w-full'>

          <div className='flex items-center w-full justify-between gap-3 mt-2 mb-1.5'>
            <div className='flex gap-4 items-center flex-shrink-0 cursor-pointer w-auto'>
              <PiList className='text-2xl text-gray-800 min-[1200px]:hidden' />
              <Image onClick={()=>router.push('/')}  className="min-[1200px]:w-38" src="https://www.freeiconspng.com/uploads/hd-trendyol-text-logo-high-quality-png-27.png" alt="Trendyol Logo" width={100} height={40} />
            </div>

            <div className='hidden min-[1200px]:flex flex-1 max-w-4xl items-center gap-2 bg-gray-100 px-3.5 py-3 rounded-md focus-within:bg-white focus-within:ring-2 focus-within:ring-orange-500'>
              <IoSearch className='text-orange-500 text-2xl ' />
              <input className="outline-none bg-transparent w-full text-sm" placeholder="Ürün, kategori veya marka ara" />
            </div>

            <div className='flex gap-4.5 cursor-pointer flex-shrink-0'>
              <div className='flex items-center gap-[2px] hover:text-orange-500'>
                <IoPersonOutline className='text-[21.5px]' />
                <span className='font-medium text-[15px] hidden min-[1200px]:inline-block'>Giriş Yap</span>
              </div>
              <div className='flex items-center gap-[2px] hover:text-orange-500 '>
                <IoHeartOutline className='text-[22px]' />
                <span className='font-medium text-[15px] hidden min-[1200px]:inline-block'>Favorilerim</span>
              </div>
              <div className='flex items-center gap-[2px] hover:text-orange-500'>
                <FaCartShopping className='text-[21.5px]' />
                <span className='font-medium text-[15px] hidden min-[1200px]:inline-block'>Sepetim</span>
              </div>
            </div>
          </div>

          {/* Küçük Masaüstü Arama Çubuğu*/}
          <div className="flex min-[1200px]:hidden mt-1 my-1 w-full items-center gap-3 bg-gray-100 px-4 py-2 rounded-full focus-within:bg-white focus-within:ri ng-2 focus-within:ring-orange-500 sticky top-0 z-50">
            <IoSearch className="text-orange-500 text-[22px] flex-shrink-0" />
            <input
              className="outline-none bg-transparent w-full text-[16px] text-gray-700 placeholder-gray-500"
              placeholder="Ürün, kategori veya marka ara"
            />
          </div>
        </header>
      </div>

      {/* Desktop Navigation - Kategoriler */}
      <nav className='hidden min-[1200px]:flex items-center gap-8 pl-10 '>
        <div className="flex items-center gap-1 py-1 cursor-pointer hover:text-orange-500">
          <PiList className="text-[22px] text-gray-800" />
          <span className='text-[14.3px] font-medium'>Kategoriler</span>
          <span className="bg-red-600 text-white text-[11px] px-1 font-bold rounded-full">
            Yeni
          </span>
        </div>
        <div className='whitespace-nowrap overflow-x-auto scrollbar-none flex gap-6'>
          {categories.map((category, index) => (
            <span key={index} className={`text-[14px] font-semibold cursor-pointer hover:text-orange-500 py-2`}>
              {category}
            </span>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default DesktopHeader;
