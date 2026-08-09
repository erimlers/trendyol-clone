import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function DesktopProductActions() {
  return (
    <div className='w-[280px] flex-shrink-0 flex flex-col gap-4'>
      
      {/* Ürünün Kampanyaları */}
      <div>
        <h3 className="text-[11px] font-bold text-gray-500 mb-2 uppercase tracking-wide">ÜRÜNÜN KAMPANYALARI</h3>
        
        <div className="flex flex-col gap-2">
          {/* Kargo Kampanyası */}
          <div className="border border-gray-200 rounded-md p-3 flex items-center justify-between cursor-pointer hover:border-gray-300 hover:shadow-sm transition-all group">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-600 text-lg">📦</div>
               <span className="text-[12px] font-semibold text-gray-800 group-hover:text-orange-500">350 TL ve Üzeri Kargo Bedava<br/><span className="text-gray-500 font-normal">(Satıcı Karşılar)</span></span>
            </div>
            <span className="text-gray-400 font-bold text-lg">{'>'}</span>
          </div>

          {/* Plus Kampanyası */}
          <div className="border border-orange-200 bg-orange-50/30 rounded-md p-3 flex items-center justify-between cursor-pointer hover:border-orange-300 transition-all group">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 bg-orange-100 text-orange-500 rounded flex items-center justify-center text-lg">🏷️</div>
               <div className="flex flex-col">
                  <span className="text-[10px] text-orange-500 font-bold flex items-center gap-1">✦ Trendyol Plus'a Özel</span>
                  <span className="text-[12px] font-semibold text-gray-800 group-hover:text-orange-500">Kod: TRENDYOL - 450 TL'ye<br/>Trendyol Plus'a Özel Fiyat</span>
               </div>
            </div>
            <span className="text-gray-400 font-bold text-lg">{'>'}</span>
          </div>
        </div>
      </div>

      {/* Satıcı Paneli */}
      <div className="border border-gray-200 rounded-md mt-2 flex flex-col overflow-hidden">
        
        {/* Satıcı Adı ve Puanı */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
               <span className="text-[14px] font-bold text-gray-800 hover:underline">Trendyol</span>
               <div className="bg-green-500 text-white text-[11px] font-bold px-1.5 rounded flex items-center gap-0.5">10 <AiOutlineInfoCircle/></div>
            </div>
            <span className="text-[11px] text-gray-500 mt-0.5">145,0B Takipçi</span>
          </div>
        </div>

        {/* Takip Et */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-2 text-gray-800 font-semibold text-[13px]">
             <span>🎁</span> Takip Et Kazan
          </div>
        </div>

        {/* Satıcı Soruları */}
        <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-2 text-gray-800 font-semibold text-[13px]">
             <span>💬</span> Satıcı Soruları
          </div>
          <span className="text-gray-400 font-bold text-lg">{'>'}</span>
        </div>

        {/* Mağazaya Git */}
        <div className="p-3 bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
           <span className="text-[12px] font-bold text-gray-700 tracking-wide">MAĞAZAYA GİT {'>'}</span>
        </div>
      </div>

    </div>
  );
}
