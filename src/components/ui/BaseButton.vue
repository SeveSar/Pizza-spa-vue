<template>
  <button
    :class="`button ${color}`"
    :type="role"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType, ButtonHTMLAttributes } from "vue";
export default defineComponent({
  emits: {
    click(): boolean {
      return true;
    },
  },
  props: {
    color: {
      type: String,
      default: "",
    },
    role: {
      type: String as PropType<ButtonHTMLAttributes["type"]>,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="less" scoped>
.button {
  font-family: "Inter";
  font-weight: 400;
  color: #ffffff;
  transition: all 0.2s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 22px;
  height: 48px;
  border-radius: 6px;
  &.standart {
    background: #ff7010;

    &:hover {
      background-color: darken(#ff7010, 15%);
    }
  }
  &.red {
    background-color: #ff0000;
  }
  &.small {
    padding: 10px;
    color: #000;
    border-radius: 25px;
    background-color: #f0f0f0;
    &:hover,
    &.active {
      background-color: #ff0000;
      color: #fff;
    }
  }
}
</style>
