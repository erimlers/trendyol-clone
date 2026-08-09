import React from 'react'
import mock from '@/mock.json'
import { getDeviceType } from '@/utils/device';
import DesktopProductDetail from './desktopProductDetail/DesktopProductDetail';
import MobileProductDetail from './mobileProductDetail/MobileProductDetail';

async function ProductDetail({ product }) {
  const { isDesktop } = await getDeviceType();

  return isDesktop ? <DesktopProductDetail product={product} /> : <MobileProductDetail product={product} />;
}

export default ProductDetail
