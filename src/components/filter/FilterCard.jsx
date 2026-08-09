'use client'
import React from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

function FilterCard({title,options,searchBar}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // URL uyumlu (küçük harf ve boşluksuz) anahtar formatı
  const queryKey = title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
  
  // Mevcut URL'den parametreleri oku (Varsa Diziye çevir)
  const currentParams = searchParams.get(queryKey);
  const selectedOptions = currentParams ? currentParams.split(',') : [];

  const handleCheckboxChange = (option) => {
    let updatedSelections = [...selectedOptions];
    
    // Dizide varsa çıkar, yoksa ekle (Toggle)
    if (updatedSelections.includes(option)) {
      updatedSelections = updatedSelections.filter(item => item !== option);
    } else {
      updatedSelections.push(option);
    }

    // URL'deki mevcut diğer parametreleri kaybetmemek için güncel searchParams ile yeni URLSearchParams oluşturuyoruz
    const params = new URLSearchParams(searchParams.toString());
    
    if (updatedSelections.length > 0) {
      params.set(queryKey, updatedSelections.join(','));
    } else {
      params.delete(queryKey);
    }

    // Masaüstünde checkbox'a tıklanır tıklanmaz URL güncellenir
    router.push(`${pathname}?${params.toString()}`);
  };
    
  return (
      <details className='group w-[200px] border-b border-gray-200 pt-3 pl-1 pb-2.5 cursor-pointer bg-transparent hover:bg-gray-50'>
        <summary className='flex justify-between list-none cursor-pointer text-[14px] font-semibold'>
         <span>{title}</span>
         <IoChevronDown className='text-gray-500 group-hover:text-orange-500 text-sm group-open:rotate-180'/>
        </summary>
        {searchBar && (
            <div className='flex flex-col gap-3'>
            <input className="border border-gray-300 max-w-[200px] rounded-md py-1.5 px-2 bg-gray-20 mt-3 text-[12px] focus:outline-none hover:border-gray-500 bg-gray-50" type="text" placeholder={`${title} Ara`}/>
            <label className="cursor-pointer text-[12px] hover:text-gray-500 transition-colors duration-300 font-semibold">Popüler Markalar</label>
            </div>
            
        )}

        <ul>
            {options.map((option,index) => (
                <li className='flex items-center mb-2 gap-2 hover:text-gray-500 transition-colors duration-300 mt-2' key={index}>
                    <input 
                      className="w-4 h-4 accent-orange-500 cursor-pointer" 
                      type="checkbox" 
                      id={`${queryKey}-${index}`} 
                      name={option} 
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    <label className="cursor-pointer text-[14px]" htmlFor={`${queryKey}-${index}`}>{option}</label>
                </li>
            ))}
        </ul>
      </details>
  )
}

export default FilterCard
