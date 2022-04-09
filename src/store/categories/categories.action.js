import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPES } from "./categories.type";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesError = (error) =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error);
