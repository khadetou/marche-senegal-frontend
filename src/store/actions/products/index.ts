import axios from "axios";

// CREATE PRODUCTS
const createProducts = async (productData: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.post(
    "http://localhost:5000/products",
    productData,
    config
  );
  return data;
};

// GET ALL PRODUCTS

const getAllProducts = async () => {
  const { data } = await axios.get("http://localhost:5000/products");

  return data;
};

// UPDATE PRODUCT
const updateProduct = async (productData: any, token: any, id: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.put(
    `http://localhost:5000/products/${id}`,
    productData,
    config
  );

  return data;
};

// GET PRODUCT BY ID
const getProductById = async (id: string) => {
  const { data } = await axios.get(`http://localhost:5000/products/${id}`);
  return data;
};

// DELETE PRODUCT
const deleteProduct = async (id: string, token: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.delete(
    `http://localhost:5000/products/${id}`,
    config
  );
  return data;
};

const productsService = {
  createProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
export default productsService;
