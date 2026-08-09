'use client'
import React, { useState } from 'react';
import { filterItems } from "@/constants";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

export default function MobileFilterDetail({ 
  category, 
  setActiveCategory 
}) {
  const categoryData = filterItems.find(item => item.title === category);
  
  // Sadece görsel olarak tıklanabilir olması için yerel bir durum (dummy state)
  const [dummySelections, setDummySelections] = useState([]);
  
  if (!categoryData) return null;

  const handleCheckboxChange = (option) => {
    // Sadece görsel olarak checkbox'u açıp kapatır
    setDummySelections(prev => 
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };

  const handleApply = () => {
    // Uygula butonu sadece ana menüye dönmeyi sağlar
    setActiveCategory(null);
  };

  return (
    <div className="flex flex-col fixed inset-0 bg-gray-100 z-50 w-full h-full">
      {/* Detay Üst Bar */}
      <div className="bg-white flex items-center border-b border-gray-200 px-3 py-3 h-[50px] shrink-0">
        <IoIosArrowBack 
          onClick={() => setActiveCategory(null)} 
          className="text-[24px] text-gray-800 cursor-pointer absolute left-3"
        /> 
        <span className="font-semibold text-[16px] text-center w-full">{category}</span>
        <span 
          onClick={() => setDummySelections([])}
          className="absolute right-4 text-[13px] text-gray-500 font-medium cursor-pointer"
        >
          Temizle
        </span>
      </div>

      {/* Checkbox Listesi */}
      <div className="flex flex-col bg-white overflow-y-auto flex-1 w-full">
        {categoryData.options.map((option, index) => {
          const isSelected = dummySelections.includes(option);
          return (
            <label 
              key={index}
              onClick={(e) => {
                e.preventDefault(); // Varsayılan label davranışını engelle
                handleCheckboxChange(option);
              }}
              className="flex items-center px-4 py-3.5 border-b border-gray-100 cursor-pointer w-full"
            >
              <div className={`w-[22px] h-[22px] rounded flex items-center justify-center mr-3 border ${isSelected ? 'bg-orange-500 border-orange-500' : 'bg-white border-gray-300'}`}>
                {isSelected && <IoCheckmark className="text-white text-[16px]" />}
              </div>
              <span className="text-[14px] text-gray-800 flex-1 leading-tight">{option}</span>
            </label>
          );
        })}
      </div>

      {/* Alt Uygula Butonu */}
      <div className="bg-white p-3 border-t border-gray-200 shrink-0 w-full">
        <button 
          onClick={handleApply}
          className="w-full bg-orange-500 text-white font-semibold text-[15px] py-3 rounded-md active:bg-orange-600 transition-colors"
        >
          Uygula
        </button>
      </div>
    </div>
  );
}
