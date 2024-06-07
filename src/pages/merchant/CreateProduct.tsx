import { createProduct } from "@/utils/api/merchant/product/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const productData = {
      product_name: productName,
      description: description,
      price: parseFloat(price),
    };

    try {
      const response = await createProduct(productData);
      console.log("Product created:", response);
      setProductName("");
      setDescription("");
      setPrice("");

      navigate("/merchant/products");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div>
      <div className="max-w-2xl mt-8 flex w-full flex-col border rounded bg-white p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Create products
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
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
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
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="rounded border-0 bg-[#464BD8] py-2 px-6 text-lg text-white hover:bg-[#464BD8]/80 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
