import React from 'react';
import { getDeviceType } from '@/utils/device';
import DesktopProductGrid from './DesktopProductGrid';
import MobileProductGrid from './MobileProductGrid';

export default async function ProductGrid() {
  const { isDesktop } = await getDeviceType();

  return isDesktop ? <DesktopProductGrid /> : <MobileProductGrid />;
}