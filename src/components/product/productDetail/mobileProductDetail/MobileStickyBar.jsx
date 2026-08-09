import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function MobileStickyBar({ product }) {
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 px-3 py-2 flex flex-col z-50">
      
      <div className="flex items-center gap-1 mb-1">
        <span className="text-red-600 font-bold text-[10px]">Son 10 Günün En Düşük Fiyatı!</span>
        <AiOutlineInfoCircle className="text-gray-500 text-[10px]" />
      </div>
      
      <div className="flex items-center justify-between">

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[18px] font-bold text-red-600 tracking-tight">{product.price} TL</span>
          </div>
          <span className="text-[11px] font-bold text-green-500 mt-0.5">Kargo Bedava</span>
        </div>
        
        <button className="bg-orange-500 text-white font-semibold text-[15px] px-8 py-2.5 rounded-md active:bg-orange-600 transition-colors shadow-sm">
          Sepete Ekle
        </button>
      </div>

    </div>
  );
}
