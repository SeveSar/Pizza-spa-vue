<template>
  <VForm @submit-form="onSubmit" />
</template>

<script setup lang="ts">
import VForm from "@/components/VForm/VForm.vue";
import type DataFormControls from "@/types/DataFormControls";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const onSubmit = async (data: DataFormControls) => {
  await userStore.login(data.email, data.password);
};
</script>

<style scoped></style>
