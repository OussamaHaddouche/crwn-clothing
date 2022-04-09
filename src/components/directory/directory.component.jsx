import { useSelector } from "react-redux";

import { selectCategories } from "../../store/categories/categories.selector";
import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = () => {
  const categories = useSelector(selectCategories);
  return (
    <DirectoryContainer>
      {categories.map(({ title, imageUrl }) => {
        return <DirectoryItem key={title} title={title} imageUrl={imageUrl} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
