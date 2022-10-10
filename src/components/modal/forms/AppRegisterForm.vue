<template>
  <VForm
    title-form="Зарегестрируйтесь"
    button-text="Создать аккаунт"
    @submitForm="onSubmit"
  />
</template>

<script setup lang="ts">
import VForm from "@/components/VForm/VForm.vue";
import type DataFormControls from "@/types/DataFormControls";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const onSubmit = async (data: DataFormControls) => {
  await userStore.register(data.email, data.password);
};
</script>

<style scoped></style>
