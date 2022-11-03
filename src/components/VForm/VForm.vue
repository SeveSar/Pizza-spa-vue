<template>
  <form @submit.prevent="onSubmit" class="form-auth">
    <div class="form-auth__header">
      <h3 class="form-auth__title">{{ titleForm }}</h3>
      <div class="form-auth__text">
        Сможете быстро оформлять заказы, использовать бонусы
      </div>
    </div>
    <div class="form-auth__body">
      <div class="form-group">
        <BaseInput
          v-model="v$.emailInput.$model"
          labelText="Ваш E-mail"
          id="auth-1"
          :errors="emailErrorText"
          type="email"
          name="email"
        />
      </div>
      <div class="form-group">
        <BaseInput
          labelText="Ваш пароль"
          id="auth-2"
          type="password"
          name="password"
          :errors="passwordErrorText"
          v-model="v$.passwordInput.$model"
        />
      </div>
    </div>
    <BaseButton type="submit" color="main">{{ buttonText }}</BaseButton>
  </form>
</template>

<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import { ref, toRef, toRefs, computed, reactive } from "vue";
import type DataFormControls from "@/types/DataFormControls";

defineProps({
  buttonText: {
    type: String,
    default: "Войти в аккаунт",
  },
  titleForm: {
    type: String,
    default: "Вход в аккаунт",
  },
});
const emit = defineEmits<{
  (e: "submit-form", data: DataFormControls): void;
}>();

const state = reactive({
  emailInput: "",
  passwordInput: "",
});
const rules = {
  emailInput: { required, email },
  passwordInput: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(rules, state, { $lazy: true, $autoDirty: true }).value;

const emailErrorText = computed(() => {
  return v$.emailInput.required.$invalid
    ? "Укажите свой e-mail"
    : v$.emailInput.email.$invalid
    ? "Введите правильный e-mail"
    : false;
});
const passwordErrorText = computed(() => {
  return v$.passwordInput.required.$invalid
    ? "Укажите пароль"
    : v$.passwordInput.minLength.$invalid
    ? "Мин 6 символов"
    : false;
});
const onSubmit = async () => {
  const result = await v$.$validate();
  const { emailInput, passwordInput } = toRefs(state);
  if (result) {
    emit("submit-form", {
      email: emailInput.value,
      password: passwordInput.value,
    });
  }
};
</script>
<style scoped lang="less">
.form-auth {
  &__title {
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 15px;
  }
  &__text {
    font-size: 16px;
    line-height: 22px;
  }
  &__body {
    margin-top: 20px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .button {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
