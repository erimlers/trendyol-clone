import React from 'react';
import DesktopGallery from './DesktopGallery';
import DesktopProductInfo from './DesktopProductInfo';
import DesktopProductActions from './DesktopProductActions';

export default function DesktopProductDetail({ product }) {
  if (!product) return <div className="p-4">Ürün verisi yüklenemedi.</div>;

  return (
    <div className="flex w-full bg-white pb-20 min-w-[1200px] max-w-[1500px] mx-auto px-30 py-6 gap-8">
        <DesktopGallery product={product} />
        <DesktopProductInfo product={product} />
        <DesktopProductActions />
    </div>
  );
}
