import axios from "axios";

// CREATE ORDER
export const createOrder = async (token: string, orderData: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.post(
    "http://localhost:5000/order",
    orderData,
    config
  );

  return data;
};

// GET ORDER
export const getOrderById = async (token: any, id: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`http://localhost:5000/order/${id}`, config);

  return data;
};

// GET MY ORDERS
export const getMyOrders = async (token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(
    "http://localhost:5000/order/myorders",
    config
  );
  return data;
};

const orderService = {
  createOrder,
  getOrderById,
  getMyOrders,
};

export default orderService;
