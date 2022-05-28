import type { ProductItem } from "@/types/ProductItem";
export interface Cartitem extends ProductItem {
  cnt: number;
}
