import { useContext } from "react";

import DirectoryItem from "../directory-item/directory-item.component";
import { CategoriesContext } from "../../context/categories.context";

import { DirectoryContainer } from "./directory.styles";

const Directory = () => {
  const { categories } = useContext(CategoriesContext);
  const categoriesNames = Object.keys(categories);
  return (
    <DirectoryContainer>
      {categoriesNames.map((category) => {
        const categoryData = categories[category];
        return <DirectoryItem key={category} title={category} categoryData={categoryData} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
