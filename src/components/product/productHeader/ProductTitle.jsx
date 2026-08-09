import React from 'react';

export default function ProductTitle({ isDesktop }) {
  if (isDesktop) {
    return (
      <div className='flex flex-col min-[1200px]:flex-row min-[1200px]:gap-2 min-[1200px]:items-center'>
        <span className='font-semibold text-[16px] min-[1200px]:text-[18px]'>Mobilya</span>
        <span className='text-[#999999] font-semibold text-[13px] min-[1200px]:text-[14px] min-[1200px]:text-gray-500 min-[1200px]:font-normal'>100000+ Ürün</span>
      </div>
    );
  }

  return (
    <div className='flex flex-col mx-auto leading-none gap-1 items-center'>
      <span className='font-semibold text-[16px]'>Mobilya</span>
      <span className='text-[#999999] font-semibold text-[12px]'>100000+ Ürün</span>
    </div>
  );
}
