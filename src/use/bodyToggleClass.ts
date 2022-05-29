import { watch } from "vue";

export function useBodyToggleClass(valueModal: object) {
  console.log(valueModal);
  function toggleClassBody(val: object) {
    if (val) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
  }
  watch(valueModal, (val) => {
    toggleClassBody(val);
  });
}
