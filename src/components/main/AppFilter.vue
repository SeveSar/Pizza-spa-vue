<template>
  <div class="filter">
    <div class="filter__inner">
      <BaseButton
        @click="onClick(btn)"
        color="rounded"
        :class="{ active: btn.category === currentCategory }"
        v-for="btn in filterButtons"
        :key="btn.category"
      >
        {{ btn.title }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../ui/BaseButton.vue";
const emit = defineEmits<{
  (e: "buttonClick", type: number): void;
}>();
defineProps<{
  currentCategory: number;
}>();
type FilterButton = {
  title: string;
  category: number;
};
const filterButtons = [
  { title: "Все", category: 0 },
  { title: "Острые", category: 1 },
  { title: "Мясные", category: 2 },
  { title: "Гриль", category: 3 },
  { title: "Закрытые", category: 4 },
] as FilterButton[];
const onClick = (btn: FilterButton) => {
  emit("buttonClick", btn.category);
};
</script>

<style scoped lang="less">
.filter {
  overflow-x: auto;
  margin: 0 -16px;
  &__inner {
    padding: 0 16px;
    display: flex;
    align-items: center;
  }
}
.button {
  margin-right: 10px;
}
</style>
