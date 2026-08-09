import React from 'react'
import mock from '@/mock.json'
import ProductDetail from '@/components/product/productDetail/ProductDetail'

 async function Page({params}) {
        const {id} = await params;
        const product = mock.find(item => item.id.toString() === id);
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  )
}

export default Page
