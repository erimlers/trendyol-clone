import React from 'react';
import { getDeviceType } from '@/utils/device';
import DesktopProductLayout from './DesktopProductLayout';
import MobileProductLayout from './MobileProductLayout';

export default async function ProductLayout() {
  const { isDesktop } = await getDeviceType();

  return isDesktop ? <DesktopProductLayout /> : <MobileProductLayout />;
}
