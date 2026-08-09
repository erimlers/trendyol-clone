import React from 'react';
import { getDeviceType } from '@/utils/device';
import ProductTitle from './ProductTitle';
import MobileFilterActionBar from './MobileFilterActionBar';
import ProductBadges from './ProductBadges';
import DesktopSortSelect from './DesktopSortSelect';

export default async function ProductHeader() {
  const { isDesktop } = await getDeviceType();

  return (
    <div className='flex flex-col gap-2 min-w-0 w-full'>
      <ProductTitle isDesktop={isDesktop} />
      
      {!isDesktop && <MobileFilterActionBar />}
      
      {isDesktop && (
        <div className='flex justify-between items-center gap-3 w-full min-w-0'>
          <ProductBadges />
          <DesktopSortSelect />
        </div>
      )}
    </div>
  );
}
