<template>
  <a-spin :indicator="indicator" class="spin" />
</template>
<script lang="ts">
import { LoadingOutlined } from "@ant-design/icons-vue";
import { defineComponent, h } from "vue";
export default defineComponent({
  setup() {
    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: "57px",
      },
      spin: true,
    });
    return {
      indicator,
    };
  },
});
</script>
<style lang="less" scoped>
.spin {
  margin: 0 auto;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:deep(.anticon) {
    svg {
      fill: #ff7010;
      font-size: 90px;
    }
  }
}
</style>
