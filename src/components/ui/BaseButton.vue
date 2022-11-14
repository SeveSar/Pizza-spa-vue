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
  border-radius: 6px;
  &.standart {
    background: #ff7010;
    padding: 13px 25px;
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
  &.rounded {
    padding: 13px 30px;
    border-radius: 30px;
    color: #000;
    font-size: 15px;
    font-weight: 700;
    background-color: #f9f9f9;
    &:hover {
      background-color: #c6bfbf;
    }
    &.active {
      background-color: #ff7010;
      color: #fff;
    }
    @media screen and (max-width: 575px) {
      padding: 7px 15px;
      font-size: 12px;
      line-height: 18px;
    }
  }
}
</style>
