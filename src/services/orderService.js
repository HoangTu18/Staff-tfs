import { BaseService } from "./BaseService";

class OrderService extends BaseService {
  getOrder = () => {
    return this.get(`orders`);
  };
  insertOrder = (model) => {
    return this.post(`orders`, model);
  };
  updateOrder = (model) => {
    return this.put(`orders`, model);
  };
  deleteOrder = (id) => {
    return this.delete(`orders/${id}`);
  };
}
export const orderService = new OrderService();
