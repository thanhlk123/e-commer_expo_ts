import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_IN_CART,
  UPDATE_ITEM_IN_CART,
} from "@constants/ActionType";
import { CartItem } from "@constants/BagScreen";

export type BagProps = {
  data: CartItem[];
  isLoading: boolean;
};

const initData = {
  data: [
    {
      id: 1,
      url:
        "http://image.vietnamnews.vn/uploadvnnews/Article/2021/3/18/142705_hoa.jpg",
      totalInStock: 3,
      totalOrder: 2,
      name: "FabAlley Women Gray Classic Fit",
      shopName: "FunFash",
      price: 799,
      originPrice: 1299,
      type: "Casual Top",
    },
    {
      id: 2,
      url:
        "http://image.vietnamnews.vn/uploadvnnews/Article/2021/3/18/142705_hoa.jpg",
      totalInStock: 3,
      totalOrder: 2,
      name: "FabAlley Women Gray Classic Fit",
      shopName: "FunFash",
      price: 799,
      originPrice: 1299,
      type: "Casual Top",
    },
  ],
  isLoading: false,
};

const addItemToCart = (state: BagProps, payload) => {
  return {
    ...state,
    data: payload,
  };
};

const removeItemInCart = (state: BagProps, id) => {
  let newData = state.data.filter((e) => e.id !== id);
  return {
    ...state,
    data: newData,
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
