import { type } from "os";
import React from "react";
import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation";
type CategoryItemProps = {
  categoryName: string;
  icon: IconType;
  selectedCategory: boolean;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
  icon: Icon,
  categoryName,
  selectedCategory
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`?category=${categoryName}`)}
      className={`${selectedCategory? 'border-b-2 border-black':''} pb-2 flex items-center gap-2 cursor-pointer`}
    >
      <Icon size={20} />
      <div className="tracking-wider">{categoryName}</div>
    </div>
  );
};

export default CategoryItem;
