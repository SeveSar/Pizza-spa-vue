<template>
  <div class="filter">
    <div class="filter__inner">
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
  overflow-x: auto;
  margin: 0 -16px;
  &__inner {
    padding: 0 16px;
    display: flex;
    align-items: center;
  }
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
  @media screen and (max-width: 575px) {
    padding: 7px 15px;
    font-size: 12px;
    line-height: 18px;
  }
  &:hover {
    background-color: #c6bfbf;
  }
  &.active {
    background-color: #ff7010;
    color: #fff;
  }
}
</style>
