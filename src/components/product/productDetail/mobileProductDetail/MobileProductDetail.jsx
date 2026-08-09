import React from 'react'
import MobileGallery from './MobileGallery'
import MobileProductInfo from './MobileProductInfo'
import MobileProductFeatures from './MobileProductFeatures'
import MobileProductSeller from './MobileProductSeller'
import MobileStickyBar from './MobileStickyBar'

function MobileProductDetail({ product }) {

  return (
    <div className='w-full flex flex-col pb-24 bg-white min-h-screen'>
      <MobileGallery product={product} />
      <MobileProductInfo product={product} />
      <MobileProductFeatures />
      <MobileProductSeller />
      <MobileStickyBar product={product} />
    </div>
  )
}

export default MobileProductDetail
