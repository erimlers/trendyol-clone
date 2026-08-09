import React from 'react';
import FilterBar from '@/components/filter/FilterBar';
import ProductGrid from '../productGrid/ProductGrid';
import ProductHeader from '../productHeader/ProductHeader';

function DesktopProductLayout() {
  return (
    <div className='flex flex-col gap-8 mt-4 w-full max-w-[1450px] mx-auto px-10 min-[1200px]:px-5 min-w-0'>
      <div className='flex items-start w-full min-w-0 gap-6'>
        <FilterBar />
        <div className='flex flex-col gap-5 flex-1 min-w-0 w-full'>
          <ProductHeader />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

export default DesktopProductLayout;
