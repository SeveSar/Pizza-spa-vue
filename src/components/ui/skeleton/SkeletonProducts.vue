<template>
  <div class="skeleton-list">
    <article class="skeleton" v-for="idx in repeat" :key="idx">
      <div class="skeleton__row">
        <AnimatedPlaceholder height="150px" width="100%" />
      </div>
      <div class="skeleton__row">
        <div>
          <h4 class="skeleton__row">
            <AnimatedPlaceholder height="16px" width="75%" />
          </h4>
        </div>
        <div class="skeleton__row">
          <AnimatedPlaceholder height="16px" width="65%" />
        </div>
      </div>
      <div class="skeleton__row d-flex">
        <AnimatedPlaceholder
          v-for="idx in 3"
          :key="idx"
          height="40px"
          width="200px"
          borderRadius="35px"
        />
      </div>
      <div class="skeleton__row d-flex">
        <AnimatedPlaceholder height="50px" borderRadius="12px" width="130px" />
        <AnimatedPlaceholder height="16px" width="50px" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    AnimatedPlaceholder,
  },
  props: {
    repeat: {
      type: Number,
      default: 5,
    },
  },
});
</script>

<style scoped lang="less">
.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.skeleton-list {
  display: flex;
  flex-wrap: wrap;
  margin: 30px -10px 0;
  .skeleton {
    width: calc((100% / 4) - 20px);
    margin: 0 10px 25px;
    @media screen and (max-width: 991px) {
      width: calc((100% / 3) - 20px);
    }
    @media screen and (max-width: 575px) {
      width: calc((100% / 2) - 20px);
    }
    &__row {
      margin: 10px 0;
    }
  }
}
</style>
