<template>
  <label :for="id"> {{ labelText }} </label>
  <input
    :type="type"
    class="form-control"
    :id="id"
    :placeholder="placeholder"
    :value="modelValue"
    :name="name"
    @input="updateValue"
  />
  <small v-if="errors">{{ errors }}</small>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    labelText: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    errors: {
      type: [Boolean, String],
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const updateValue = (e: Event) => {
      ctx.emit("update:modelValue", (e.target as HTMLInputElement).value);
    };
    return {
      updateValue,
    };
  },
});
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
small {
  color: red;
  display: inline-block;
  margin-top: 5px;
}
</style>
