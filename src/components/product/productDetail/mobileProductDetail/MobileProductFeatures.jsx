import React from 'react';

export default function MobileProductFeatures() {
  return (
    <div className="flex gap-2 px-3 mt-4">

      <div className="flex flex-col bg-orange-50/50 border border-orange-100 rounded-md p-2 flex-1 items-center justify-center">
        <span className="text-[11px] text-orange-500 font-medium mb-0.5">Materyal</span>
        <span className="text-[13px] font-bold text-gray-800">Ahşap</span>
      </div>
      
      <div className="flex flex-col bg-orange-50/50 border border-orange-100 rounded-md p-2 flex-1 items-center justify-center">
        <span className="text-[11px] text-orange-500 font-medium mb-0.5">Fonksiyon</span>
        <span className="text-[13px] font-bold text-gray-800">Dayanıklı</span>
      </div>
    </div>
  );
}
