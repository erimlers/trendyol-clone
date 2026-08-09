import React from 'react';
import ProductCard from '../ProductCard';
import mock from '@/mock.json';
import Link from 'next/link';

export default function DesktopProductGrid() {
  return (
    <div className='grid grid-cols-2 min-[1200px]:grid-cols-4 gap-4 w-full min-w-0 px-0'>
      {mock.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
