"use client"
import React from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { useParams } from 'next/navigation'
import mock from '@/mock.json'



function FilterPath() {
  const params = useParams();
  const product = mock.find((product) => product.id.toString() === params.id);

  return (
    <div className={`items-center text-[13.5px] text-gray-800 mt-2 ${params.id ? 'hidden min-[1200px]:flex px-65 text-[15px]' : 'flex px-2 gap-1.5 min-[500px]:px-10 min-[500px]:mt-4'}`}>
        <span className='cursor-pointer'>Trendyol</span>
        <IoChevronDown className='text-orange-500 text-sm rotate-270 cursor-pointer'/>
        <span className='cursor-pointer'>Ev ve Mobilya</span>
        <IoChevronDown className='text-orange-500 text-sm rotate-270 cursor-pointer'/>
        <span className={params.id ? 'cursor-pointer' : ' font-semibold cursor-pointer'}>Mobilya</span>
        {
         params.id && (
            <>
              <IoChevronDown className='text-orange-500 text-sm rotate-270 cursor-pointer'/>
              <span className='font-semibold cursor-pointer'>{product?.name}</span>
            </>
          )
        }
      </div>
  )
}

export default FilterPath
