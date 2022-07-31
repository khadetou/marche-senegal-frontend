import axios from "axios";

// CREATE ORDER
export const createOrder = async (token: string, orderData: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(
    "ttp://localhost:5000/order",
    orderData,
    config
  );
};

const orderService = {
  createOrder,
};

export default orderService;
