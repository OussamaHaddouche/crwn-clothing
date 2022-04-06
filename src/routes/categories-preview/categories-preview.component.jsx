import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div>
      {Object.keys(categories).map((category) => (
        <CategoryPreview
          key={category}
          title={category}
          products={categories[category].slice(0, 4)}
        />
      ))}
    </div>
  );
};

export default CategoriesPreview;
