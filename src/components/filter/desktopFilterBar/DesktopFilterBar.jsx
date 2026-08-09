import FilterCard from "../FilterCard";
import { filterItems } from "@/constants/index";


function DesktopFilterBar() {
  return (
    <aside className='hidden min-[500px]:flex flex-col sticky top-28 h-[calc(100vh-7rem)] overflow-y-auto w-[200px] flex-shrink-0 pr-2 scrollbar-none'>
      {filterItems.map((item, index) => (
        <FilterCard key={index} title={item.title} options={item.options} searchBar={item.title === "Marka"} />
      ))}
    </aside>
  )
}

export default DesktopFilterBar