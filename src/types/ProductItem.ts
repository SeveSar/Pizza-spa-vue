type sizeItem = {
  size: number;
  active: boolean;
  id: number;
  price: number;
};
export interface ProductItem {
  category: number;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  sizes?: sizeItem[];
  types?: number[];
}
