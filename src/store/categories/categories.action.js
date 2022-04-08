import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPES } from "./categories.type";

export const setCategories = (categories) =>
  createAction(CATEGORIES_TYPES.SET_CATEGORIES, categories);
