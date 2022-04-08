import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategories } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  return (
    <div>
      {categories.map(({ items = [], title }) => (
        <CategoryPreview
          key={title}
          title={title}
          products={items.slice(0, 4)}
        />
      ))}
    </div>
  );
};

export default CategoriesPreview;
