import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_IN_CART,
  UPDATE_ITEM_IN_CART,
} from "@constants/ActionType";
import {
  RemoveItemInCartAction,
  UpdateItemInCartAction,
} from "appRedux/actionTypes/bagScreenAction";

type BagProps = {
  data: any;
  isLoading: boolean;
};

const initData = {
  data: [],
  isLoading: false,
};

const addItemToCart = (state: BagProps, payload) => {
  return {
    ...state,
    data: payload,
  };
};

const removeItemInCart = (state: BagProps, payload) => {
  return {
    ...state,
    data: payload,
  };
};

const updateItemInCart = (state: BagProps, payload) => {
  return {
    ...state,
    data: payload,
  };
};

const bagReducer = (state: BagProps = initData, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return addItemToCart(state, action.payload);
    case REMOVE_ITEM_IN_CART:
      return removeItemInCart(state, action.payload);
    case UPDATE_ITEM_IN_CART:
      return updateItemInCart(state, action.payload);
    default:
      return state;
  }
};

export default bagReducer;
