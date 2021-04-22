import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_IN_CART,
  UPDATE_ITEM_IN_CART,
} from "@constants/ActionType";
import { CartItem } from "@constants/BagScreen";

export type BagProps = {
  data: CartItem[];
  totalPrice: number;
  totalDiscount: number;
  shippingFee: number;
  totalPayment: number;
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
      isSelected: true,
    },
    {
      id: 2,
      url:
        "https://product.hstatic.net/200000163831/product/z2106102282361_141eac15bbfa3d0ccb8dbde75918965c_de5fea53694d46868dc14175b4e3703d_master.jpg",
      totalInStock: 3,
      totalOrder: 10,
      name: "FabAlley Women Gray Classic Fit",
      shopName: "FunFash",
      price: 799,
      originPrice: 1299,
      type: "Casual Top",
      isSelected: true,
    },
  ],
  isLoading: false,
  totalPrice: 0,
  totalDiscount: 0,
  shippingFee: 0,
  totalPayment: 0,
};

const addItemToCart = (state: BagProps, payload) => {
  let newData = [...state.data, payload];

  let totalPrice = updatePrice(newData);

  let totalDiscount = 0.2 * totalPrice;
  return {
    ...state,
    data: newData,
    totalPrice,
    totalDiscount,
  };
};

const removeItemInCart = (state: BagProps, id) => {
  let newData = state.data.filter((e) => e.id !== id);
  let totalPrice = updatePrice(newData);
  let totalDiscount = 0.2 * totalPrice;
  return {
    ...state,
    data: newData,
    totalPrice,
    totalDiscount,
  };
};

const updateItemInCart = (state: BagProps, payload) => {
  let originData = [...state.data];
  let findIndex = originData.findIndex((e) => e.id === payload.id);
  if (findIndex > -1) {
    originData[findIndex] = payload;
  }

  let totalPrice = updatePrice(originData);
  let totalDiscount = 0.2 * totalPrice;

  return {
    ...state,
    data: originData,
    totalPrice,
    totalDiscount,
  };
};

const updatePrice = (data: CartItem[]) => {
  return data.reduce((a: number, b) => {
    if (b.isSelected) {
      return a + b.totalOrder * b.price;
    }
    return a;
  }, 0);
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
