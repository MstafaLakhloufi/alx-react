import * as notificationData from "../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationData.default, [notification]);

export { normalizedData };

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  const result = [];

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      result.push(messages[notifications[id].context]);
    }
  }

  return result;
}