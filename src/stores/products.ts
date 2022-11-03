import { defineStore } from "pinia";
import { getAllProducts } from "@/core/services/products";
import type { ProductItem } from "@/types/ProductItem";

interface ProductsState {
  products: Array<ProductItem>;
}

export const useProductsStore = defineStore({
  id: "products",
  state: () =>
    ({
      products: [],
    } as ProductsState),
  getters: {
    getItemById(state) {
      return function (id: number | string): ProductItem | undefined {
        console.log(id, "products");
        return state.products.find((item) => item.id === id);
      };
    },
  },
  actions: {
    async fetchProducts() {
      try {
        const { pizzas } = await getAllProducts();
        if (pizzas) {
          this.products = pizzas;
        }
      } catch (e) {
        console.log(e);
      }
    },
    changeSizeProduct(idProduct: number | string, idSize: number | string) {
      const product = this.getItemById(idProduct);
      if (!product) return;
      const productSize = product.sizes?.find((item) => item.id === idSize);
      product.sizes?.forEach((item) => (item.active = false));
      if (productSize) {
        productSize.active = true;
        product.price = productSize.price;
      }
    },
  },
});
