export class CartModel {
    table: string;
    items: Array<ItemModel>;
    amount: number;
}
export class ItemModel {
    _id: string;
    image: string;
    name: string;
    size: string;
    price: number;
    qty: number;
    amount: number;
}

