<template>
  <transition name="fade">
    <a-alert
      v-if="Object.keys(notice).length"
      class="notice"
      :class="notice.type"
      :message="notice.title"
      :description="notice.text"
      :type="notice.type"
      show-icon
      closable
      @close="handleClose"
    />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useNoticeStore } from "@/stores/notification";
import { storeToRefs } from "pinia";
export default defineComponent({
  setup() {
    const noticeStore = useNoticeStore();
    const { notice } = storeToRefs(noticeStore);

    const handleClose = () => {
      noticeStore.clearMessages();
    };
    return {
      noticeStore,
      notice,
      handleClose,
    };
  },
});
</script>

<style scoped lang="less">
.notice {
  position: fixed;
  top: 20px;
  max-width: 500px;
  width: 100%;
  transition: all 0.5s;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1500;
}
</style>
