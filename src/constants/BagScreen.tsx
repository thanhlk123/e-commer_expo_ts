export type CartItem = {
    id: number;
    url: string;
    type: string;
    totalInStock: number;
    totalOrder: number;
    name: string;
    shopName: string;
    price: number;
    originPrice:number;
    isSelected: boolean;
}