import { defineStore } from "pinia";
import type { NoticeItem } from "@/types/NoticeItem";

export interface NoticeState {
  notice: NoticeItem;
}

export const useNoticeStore = defineStore({
  id: "notice",
  state: () =>
    ({
      notice: {},
    } as NoticeState),
  getters: {
    canAddMsg: (state): boolean => !Object.keys(state.notice).length,
  },
  actions: {
    setMessage({ type, title, text }: NoticeItem) {
      if (this.canAddMsg) {
        this.notice = { type, title, text };
        setTimeout(() => {
          this.clearMessages();
        }, 2500);
      }
    },
    clearMessages() {
      this.notice = {};
    },
  },
});
