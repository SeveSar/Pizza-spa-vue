<template>
  <label :for="id"> {{ labelText }} </label>
  <input
    :type="type"
    class="form-control"
    :id="id"
    :class="classType"
    :placeholder="placeholder"
    :value="modelValue"
    :name="name"
    @input="updateValue"
  />
</template>

<script setup lang="ts">
defineProps<{
  type: string;
  classType?: Array<object> | Array<string>;
  modelValue: string | any;
  id?: string;
  labelText: string;
  name?: string;
  placeholder?: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<style scoped lang="less">
.form-control {
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 6px;
  height: 48px;
  font-weight: 400;
  font-size: 16px;
  padding: 0 16px;
  line-height: 22px;
  width: 100%;
  color: #000;
  transition: all 0.2s linear;
  &::placeholder {
    color: #a5a5a5;
  }
  &:focus {
    border-color: #ff7010;
    outline: none;
  }
  &.error {
    border-color: red;
  }
}
label {
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  display: inline-block;
  color: #a5a5a5;
  margin-bottom: 8px;
}
</style>
