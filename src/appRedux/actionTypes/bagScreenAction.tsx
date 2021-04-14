import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_IN_CART,
  UPDATE_ITEM_IN_CART,
} from "@constants/ActionType";

import { CartItem } from "@constants/BagScreen";

export const AddItemToCartAction = (payload: CartItem) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload,
  };
};

export const RemoveItemInCartAction = (itemId: number) => {
  return {
    type: REMOVE_ITEM_IN_CART,
    payload: itemId,
  };
};

export const UpdateItemInCartAction = (payload: CartItem) => {
  return {
    type: UPDATE_ITEM_IN_CART,
    payload,
  };
};
