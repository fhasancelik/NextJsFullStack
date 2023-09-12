'use client'
import {FaUmbrellaBeach} from 'react-icons/fa'
import {LuHotel} from 'react-icons/lu'
import CategoryItem from './CategoryItem'
import { useSearchParams } from 'next/navigation'
const categories=[
  {
    name:'Holiday Village',
    icon:FaUmbrellaBeach
  },


  {
    name:'Hotel',
    icon:LuHotel
  },
  {
    name:'Villa',
    icon:FaUmbrellaBeach
  },
  {
    name:'Camping',
    icon:LuHotel
  },
]


const Categories = () => {
  const params = useSearchParams();
  const urlItem = params?.get("category");
  //console.log(urlItem);
  return (
    <div className='flex items-center gap-2 cursor-pointer'>

      {categories.map((category,index)=>{
        return(
          <CategoryItem
          
          key={index}
          categoryName={category.name}
          icon={category.icon}
          selectedCategory={urlItem==category.name ? true:false}
          
          />
        )
      })}
    </div>
  )
}

export default Categories