import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

import "./category.styles.scss";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <div className="category-container">
      <h2 className="title">{category}</h2>
      <div className="products">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
