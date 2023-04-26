import { BaseService } from "./BaseService";

class NotificationService extends BaseService {
  getNotificationList = (id) => {
    return this.get(`notifications/byaccount/${id}`);
  };
}
export const notificationService = new NotificationService();
