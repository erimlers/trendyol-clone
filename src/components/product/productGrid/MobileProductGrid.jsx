import React from 'react';
import ProductCard from '../ProductCard';
import mock from '@/mock.json';
import Link from 'next/link';

export default function MobileProductGrid() {
  return (
    <div className='grid grid-cols-2 gap-4 w-full min-w-0 px-3'>
      {mock.map((product) => (
          <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
