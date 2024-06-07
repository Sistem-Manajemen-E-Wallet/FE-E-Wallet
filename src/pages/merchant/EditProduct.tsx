import React, { useState, useEffect } from "react";
import {
  updateProduct,
  getProductById,
} from "@/utils/api/merchant/product/api";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState({
    product_name: "",
    description: "",
    price: 0,
  });

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const productData = await getProductById(id);
          setProduct(productData.data.data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      } else {
        console.error("Product ID is undefined");
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (id) {
      try {
        await updateProduct(id, product);
        navigate("/merchant/products");
      } catch (error: any) {
        console.error(error.message);
      }
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const parsedValue = name === "price" ? parseFloat(value) : value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: parsedValue,
    }));
  };

  return (
    <div>
      <div className="max-w-2xl mt-8 flex w-full flex-col border rounded bg-white p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Edit product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
              Product name
            </label>
            <input
              type="text"
              id="name"
              name="product_name"
              value={product.product_name}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="text-sm leading-7 text-gray-600"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="text-sm leading-7 text-gray-600">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              step="0.01"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded border-0 bg-primary-first py-2 px-6 text-lg text-white hover:bg-primary-first/80 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
