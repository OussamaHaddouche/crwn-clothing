import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_TYPES } from "./categories.type";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSucess = (categories) =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCESS, categories);

export const fetchCategoriesError = (error) =>
  createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error);


export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart())
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSucess(categories))
  } catch (error) {
    dispatch(fetchCategoriesError(error))
  }
  
}
