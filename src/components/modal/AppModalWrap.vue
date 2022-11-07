<template>
  <transition name="fade">
    <div
      class="modal-overlay"
      v-if="loginModal"
      @mousedown.self="storeModal.closeLoginModal"
    >
      <div class="modal">
        <button class="modal-close" @click="storeModal.closeLoginModal">
          <img src="@/assets/images/icons/close.svg" alt="" />
        </button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { useModalStore } from "@/stores/modal";
import { storeToRefs } from "pinia";
import { useBodyToggleClass } from "@/use/bodyToggleClass";
import { defineComponent, onMounted, onUnmounted } from "vue";
export default defineComponent({
  setup() {
    const storeModal = useModalStore();

    const { loginModal } = storeToRefs(storeModal);
    useBodyToggleClass(loginModal);
    const onKeyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        storeModal.closeLoginModal();
      }
    };
    onMounted(() => {
      document.body.addEventListener("keydown", onKeyHandler);
    });
    onUnmounted(() => {
      document.body.removeEventListener("keydown", onKeyHandler);
    });
    return {
      loginModal,
      storeModal,
    };
  },
});
</script>

<style scoped lang="less">
.modal {
  background: #f9f9f9;
  border-radius: 24px;
  max-width: 850px;
  margin: auto;
  width: 100%;
  padding: 60px 20px;
  color: #191919;
  position: relative;
}

.modal-close {
  position: absolute;
  right: -62px;
  top: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
}

.modal-overlay {
  display: flex;
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(32px);
  z-index: 1001;
  position: relative;
  overflow: auto;
  padding: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 600px) {
    padding: 20px;
  }
}
</style>
