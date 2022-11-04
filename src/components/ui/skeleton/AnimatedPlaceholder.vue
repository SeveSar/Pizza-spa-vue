<template>
  <div class="placeholder" :style="styleProperties">&nbsp;</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    height: {
      type: String,
    },
    width: {
      type: String,
    },
    borderRadius: {
      type: String,
      default: "10px",
    },
  },
  computed: {
    styleProperties() {
      return {
        height: this.height,
        width: this.width,
        borderRadius: this.borderRadius,
      };
    },
  },
});
</script>

<style scoped lang="less">
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
.placeholder {
  background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  );
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  animation: bgAnimate 1.2s linear infinite;
}
</style>
