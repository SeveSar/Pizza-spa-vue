export enum AppLayoutsEnum {
  default = "default",
  error = "error",
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: "AppLayoutDefault.vue",
  error: "AppLayoutError.vue",
};
