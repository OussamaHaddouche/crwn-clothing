import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.CHECK_USER_SESSION:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, isLoading: false };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, isLoading: false, error: payload };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return { ...state, isLoading: false, error: payload };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, isLoading: false, currentUser: null };
    default:
      return state;
  }
};
