type SizeType = {
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
  sizes?: SizeType[];
  types?: number[];
}
