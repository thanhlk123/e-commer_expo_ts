import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_IN_CART,
  UPDATE_ITEM_IN_CART,
} from "@constants/ActionType";

export const AddItemToCartAction = (payload) => {
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

export const UpdateItemInCartAction = (payload) => {
  return {
    type: UPDATE_ITEM_IN_CART,
    payload,
  };
};
