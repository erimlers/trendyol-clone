import React from 'react';
import { getDeviceType } from '@/utils/device';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

async function Header() {
  const { isDesktop } = await getDeviceType();

  return (
    <>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </>
  );
}
export default Header;
