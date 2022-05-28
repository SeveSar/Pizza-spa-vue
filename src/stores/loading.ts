import { defineStore } from "pinia";

interface loadingState {
  loading: boolean;
}
export const useLoadingStore = defineStore({
  id: "loading",
  state: () =>
    ({
      loading: false,
    } as loadingState),
  actions: {
    setLoading(value: boolean) {
      this.loading = value;
    },
  },
});
