'use client'
import React from 'react';
import { filterItems } from "@/constants";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

export default function MobileFilterMain({ 
  setIsOpen, 
  setActiveCategory, 
  handleListResults 
}) {
  return (
    <div className="flex flex-col fixed inset-0 bg-gray-100 z-50 w-full h-full">
      {/* Ana Üst Bar */}
      <div className="bg-white flex items-center justify-between border-b border-gray-200 px-3 py-3 h-[50px] shrink-0">
        <AiOutlineClose onClick={() => setIsOpen(false)} className="text-[24px] text-gray-800 cursor-pointer" /> 
        <span className="font-semibold text-[16px]">Filtrele</span>
        <div className="w-[24px]"></div> {/* Ortalama için boşluk bırakıcı */}
      </div>

      {/* Seçilen Filtreler (Görsel Taslak) */}
      <div className="bg-white px-4 py-3 gap-1 shrink-0">
        <span className="text-[13px] font-semibold text-gray-700">Seçilen Filtreler</span>
        <div className="text-[12px] text-gray-400 mt-1">Henüz filtre seçilmedi.</div>
      </div>
      
      {/* Kategori Listesi */}
      <div className="flex flex-col bg-white mt-2 overflow-y-auto flex-1 w-full border-t border-gray-200">
        {filterItems.map((item, index) => (
          <div 
            key={index} 
            onClick={() => setActiveCategory(item.title)}
            className="flex justify-between items-center px-4 py-4 border-b border-gray-100 cursor-pointer active:bg-gray-50 transition-colors w-full"
          >
            <div className="flex items-center gap-2">
              <span className="text-[14px] text-gray-800 font-medium">{item.title}</span>
            </div>
            <IoIosArrowForward className="text-gray-400 text-[18px]" />
          </div>
        ))}
      </div>

      {/* Alt Listele Butonu */}
      <div className="bg-white p-3 border-t border-gray-200 shrink-0 w-full">
        <button 
          onClick={handleListResults}
          className="w-full bg-orange-500 text-white font-semibold text-[15px] py-3 rounded-md active:bg-orange-600 transition-colors"
        >
          Tüm Sonuçları Listele
        </button>
      </div>
    </div>
  );
}
