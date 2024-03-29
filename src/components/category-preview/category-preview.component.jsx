import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title.toLowerCase()}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
