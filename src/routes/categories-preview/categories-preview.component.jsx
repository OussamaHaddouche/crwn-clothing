import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);

  if (categoriesIsLoading) return <Spinner />;

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
