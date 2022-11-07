import { notification } from "ant-design-vue";

export type MessageType = "error" | "success" | "warning";
export type NoticeType = {
  title: "Error" | "Success" | "Warning";
  text: string;
};

export const callNotification = (type: MessageType, msg: NoticeType): void => {
  notification[type]({
    message: msg.title,
    description: msg.text,
  });
};
