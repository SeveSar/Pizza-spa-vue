<template>
  <div class="error">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Ошибка 404. Страница не найдена",
    },
  },
});
</script>

<style scoped>
.error {
  height: calc(100vh - 105px);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
