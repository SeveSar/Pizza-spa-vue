import type { ProductItem } from "@/types/ProductItem";
export interface DataResponseProducts {
  data: {
    pizzas: ProductItem[];
  };
}
