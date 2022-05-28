<template>
  <div class="filter">
    <button
      class="btn btn--filter"
      @click="onClick(btn)"
      :class="{ active: btn.category === currentCategory }"
      v-for="btn in filterButtons"
      :key="btn.category"
    >
      {{ btn.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
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
  display: flex;
  align-items: center;
}
.btn {
  background-color: #f9f9f9;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 700;
  margin-right: 10px;
  padding: 13px 30px;
  transition: background-color 0.1s ease-in-out;
  user-select: none;
  color: #000;
  &:hover {
    background-color: #c6bfbf;
  }
  &.active {
    background-color: #ff7010;
    color: #fff;
  }
}
</style>
