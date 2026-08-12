import React from 'react';
import DesktopGallery from './DesktopGallery';
import DesktopProductInfo from './DesktopProductInfo';
import DesktopProductActions from './DesktopProductActions';

export default function DesktopProductDetail({ product }) {
  if (!product) return <div className="p-4">Ürün verisi yüklenemedi.</div>;

  return (
    <div className="w-full bg-white min-w-max">
      <div className="flex w-max mx-auto pb-20 px-8 py-6 gap-8">
        <DesktopGallery product={product} />
        <DesktopProductInfo product={product} />
        <DesktopProductActions />
      </div>
    </div>
  );
}
