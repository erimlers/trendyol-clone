import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { FiChevronRight } from "react-icons/fi";

export default function MobileProductSeller() {
  return (
    <div className='w-full flex flex-col px-3 mt-4 mb-4'>
      <div className="border border-gray-200 rounded-lg flex flex-col p-1.5 bg-white">
        
        <div className="bg-blue-50/70 p-2.5 rounded-lg flex items-center justify-between mb-1.5">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
               <span className="text-[14px] font-bold text-blue-700">Trendyol</span>
               <div className="bg-green-500 text-white text-[11px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  10
               </div>
               <AiOutlineInfoCircle className="text-blue-700 text-[15px]"/>
            </div>
            <span className="text-[11px] font-bold text-gray-500 mt-0.5">145,0B Takipçi</span>
          </div>
          
          <button className="bg-white text-orange-500 font-bold text-[12px] px-2 py-1 rounded-md border border-orange-500 flex items-center gap-0.5 shadow-sm">
            Mağazaya Git <span className="text-[14px] font-normal">›</span>
          </button>
        </div>

        <div className="p-1 flex items-center gap-2.5 cursor-pointer">
          <div className="bg-gray-100 p-2 rounded-md flex items-center justify-center">
             <BsShop className="text-gray-600 text-[16px]" />
          </div>
          <span className="text-gray-800 font-semibold text-[12px]">Takip Et</span>
        </div>

        <div className="p-1 flex items-center justify-between cursor-pointer mt-0.5">
          <div className="flex items-center gap-2.5">
            <div className="bg-gray-100 p-2 rounded-md flex items-center justify-center">
               <BiMessageDetail className="text-gray-600 text-[18px]" />
            </div>
            <span className="text-gray-800 font-semibold text-[12px]">Satıcı Soruları (564)</span>
          </div>
          <FiChevronRight className="text-gray-800 text-lg mr-1"/>
        </div>

      </div>
    </div>
  );
}
