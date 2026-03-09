import { useState } from "react";
import { CATEGORIES } from "../data/categories.data";
import { Category } from "../types/workshop.types";

type UseActiveCategoryReturn = {
  activeCategory: Category;
  setActiveCategoryById: (id: string) => void;
};

export function useActiveCategory(): UseActiveCategoryReturn {
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0]);

  const setActiveCategoryById = (id: string) => {
    const found = CATEGORIES.find((c) => c.id === id);
    if (found) setActiveCategory(found);
  };

  return { activeCategory, setActiveCategoryById };
}