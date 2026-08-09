import React from 'react';
import { FaRegStar, FaStar, FaTrophy } from 'react-icons/fa6';
import { IoHeartOutline } from "react-icons/io5";

export default function DesktopProductInfo({ product }) {

  return (
    <div className='flex-1 min-w-[500px] flex flex-col'>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1 text-[12px] text-gray-500">
           <FaTrophy className="text-blue-500 text-sm" /> 
           <span>Mobilya kategorisinde</span>
        </div>
        <div className="bg-orange-50 text-orange-500 text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 cursor-pointer hover:bg-orange-100">
          En Çok Ziyaret Edilen #6 <span className="text-[13px]">›</span>
        </div>
      </div>

      
      <h1 className='text-[22px] leading-snug mb-2'>
        <span className='font-semibold text-gray-900 mr-2'>{product.brand}</span>
        <span className='text-gray-800'>{product.name}</span>
      </h1>

      <div className='flex items-center gap-1.5 text-yellow-400 text-[14px] whitespace-nowrap mb-4'>
        <span className='text-gray-900 text-[15px] mr-1 font-bold'>{product.rating}</span>
        {Array.from({ length: 5 }).map((_, index) =>
          index < product.rating ? (
            <FaStar key={index} />
          ) : (
            <FaRegStar key={index} className='text-gray-300' />
          )
        )}
        <p className='text-gray-500 flex items-center ml-1 text-[13px]'>
          <span>•</span>
          <span className='text-gray-800 mx-1.5 font-bold hover:text-orange-500 cursor-pointer'>{product.reviewCount} <span className="text-[12px] text-gray-700 font-normal hover:text-orange-500">Değerlendirme</span></span>
          <span className='text-[16px] opacity-80'>📷</span>
          <span className='mx-1'>•</span>
          <span className='text-gray-800 font-bold mx-1.5 hover:text-orange-500 cursor-pointer'>15 <span className="text-[12px] font-normal text-gray-700 hover:text-orange-500">Soru & Cevap</span>
          </span>
        </p>
      </div>

      {/* Kullanıcılar Beğeniyor */}
      <div className="bg-yellow-50 text-gray-800 text-[13px] p-1 rounded-md flex items-center gap-2 font-medium mb-3 w-max cursor-pointer hover:bg-yellow-100 transition-colors">
        <span className="text-yellow-500 text-lg">⭐</span> 
        Kullanıcılar Beğeniyor! <span className="text-gray-500 ml-1 font-normal">Yorumları İncele {'>'}</span>
      </div>

      {/* Kupon ve Sepet Bilgisi */}
      <div className="flex items-center mb-2">
         <span className="flex items-center gap-3 bg-pink-100 text-gray-700 text-[11px] font-bold px-2 py-1 rounded border border-pink-200">🏷️ Kupon Fırsatı!
           <span className="text-pink-600 text-[12px] font-bold border border-pink-600 px-3 py-0.5 rounded cursor-pointer hover:bg-pink-50">Kazan</span>
         </span>
      </div>
      
      <div className="flex items-center gap-1.5 mb-6">
        <span className="text-[18px]">🛒</span>
        <span className="text-[14px] text-gray-800"><span className="font-bold text-orange-500">1B kişinin</span> sepetinde, tükenmeden al!</span>
      </div>

      {/* Fiyat */}
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-[32px] font-bold text-orange-500 tracking-tight">{product.price} TL</span>
      </div>

      {/* Aksiyon Butonları */}
      <div className="flex items-center gap-3 mb-8">
        <button className="flex-1 bg-white text-orange-500 font-semibold text-[16px] py-3 rounded-md border-2 border-orange-500 hover:bg-orange-50 transition-colors">
          Şimdi Al
        </button>
        <button className="flex-1 bg-orange-500 text-white font-semibold text-[16px] py-3 rounded-md border-2 border-orange-500 hover:bg-orange-600 transition-colors shadow-sm">
          Sepete Ekle
        </button>
        <button className="w-[52px] h-[52px] bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0">
          <IoHeartOutline className="text-gray-700 text-2xl" />
        </button>
      </div>

      {/* Teslimat Kutusu */}
      <div className="bg-gray-50 rounded-lg p-4 flex flex-col gap-4 mb-8">
         <div className="flex items-center gap-3">
            <span className="text-green-500 text-xl">🚚</span>
            <span className="text-[13px] text-gray-800"><span className="font-bold">Hızlı Teslimat:</span> 2 gün içinde kargoda</span>
         </div>
         <div className="h-px w-full bg-gray-200"></div>
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">📍</span>
                <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-gray-800">Tahmini Teslim:</span>
                    <span className="text-[12px] text-gray-500">Adresini seç ne zaman teslim edileceğini öğren!</span>
                </div>
            </div>
            <span className="text-orange-500 text-[13px] font-bold cursor-pointer hover:underline">Konum Seç {'>'}</span>
         </div>
      </div>

    </div>
  );
}
