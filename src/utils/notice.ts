import { notification } from "ant-design-vue";
import type { TypeMsg, NoticeItem } from "@/types/NoticeItem";
export const openNotification = (type: TypeMsg, msg: NoticeItem): void => {
  notification[type]({
    message: msg.title,
    description: msg.text,
  });
};
