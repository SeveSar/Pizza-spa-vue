<template>
  <component :is="loadAsyncIcon"></component>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    const loadAsyncIcon = computed(() =>
      defineAsyncComponent(() => import(`../icons/${props.name}.vue`))
    );
    return {
      loadAsyncIcon,
    };
  },
});
</script>

<style scoped></style>
