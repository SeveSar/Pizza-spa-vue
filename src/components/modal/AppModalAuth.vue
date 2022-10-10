<template>
  <div class="modal-content">
    <div class="modal-content__inner">
      <component :is="typeForm"></component>
    </div>
    <div class="modal-content__notify">
      {{ currentTextButton.text }}
      <button @click="changeForm">
        {{ currentTextButton.buttonText }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import AppAuthForm from "./forms/AppAuthForm.vue";
import AppRegisterForm from "./forms/AppRegisterForm.vue";

export default defineComponent({
  components: {
    AppAuthForm,
    AppRegisterForm,
  },
  setup() {
    const typeForm = ref<string>("AppAuthForm");
    const currentTextButton = computed(() => {
      return typeForm.value === "AppAuthForm"
        ? { text: "Не зарегестрированы ?", buttonText: "Создать аккаунт" }
        : { text: "Уже есть аккаунт ?", buttonText: "Войди в аккаунт" };
    });
    const changeForm = () => {
      typeForm.value =
        typeForm.value === "AppAuthForm" ? "AppRegisterForm" : "AppAuthForm";
    };
    return {
      typeForm,
      currentTextButton,
      changeForm,
    };
  },
});
</script>
<style scoped lang="less">
.modal-content {
  text-align: center;
  &__inner {
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
  }
  &__notify {
    color: #000;
    margin-top: 15px;
    button {
      color: #000;
      margin-left: 5px;
      &:hover {
        color: #ff7010;
      }
    }
  }
}
</style>
