import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);

  useEffect(() => {
    setProducts(categories[category].items);
  }, [category, categories]);

  return (
    <>
      <Title>{category}</Title>
      <CategoryContainer>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
