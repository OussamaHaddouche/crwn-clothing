import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";

const BASE_ROUTE = "shop";

const DirectoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate();

  const goToCategoryPage = () => {
    navigate(`${BASE_ROUTE}/${title.toLowerCase()}`);
  };

  return (
    <DirectoryItemContainer onClick={goToCategoryPage}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
