export class ProductModel {
    _id: string;
    name: string;
    image: string;
    size: Array<SizeModel>;
    category: string;
}

export class SizeModel {
    name: string;
    price: number;
}