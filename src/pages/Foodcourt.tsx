import { FoodcourtComp, LoadingProduct } from "@/components";
import { Daum, getAllProduct } from "@/utils/api/product";
import { atom, useAtom } from "jotai";
import { useCallback, useEffect } from "react";

const productAtom = atom<Daum[]>([]);
const loadingAtom = atom(true);

const Foodcourt = () => {
  const [products, setProducts] = useAtom(productAtom);
  const [loading, isLoading] = useAtom(loadingAtom);

  // Call API Product
  const getProducts = useCallback(async () => {
    isLoading(true);
    const response = await getAllProduct();
    if (response.statusCode == 200) {
      isLoading(false);
      setProducts(response.data.data);
    } else {
      isLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section className="relative overflow-auto h-screen py-32">
      <div className="container">
        <div className="flex justify-start gap-5 my-6">
          <span className="text-neutral-600 text-3xl font-bold">Foodcourt</span>
        </div>

        <div className="flex mobile:block justify-between">
          <h5 className="text-neutral-700 font-bold text-xl mobile:mb-2">
            What would your like to eat ?
          </h5>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari menu hari ini.."
            />
          </div>
        </div>

        <div className="grid mobile:grid-cols-2 grid-cols-4 gap-2 p-0 mt-6">
          {loading ? (
            <>
              <LoadingProduct />
              <LoadingProduct />
              <LoadingProduct />
              <LoadingProduct />
            </>
          ) : (
            products.map((product, id) => (
              <FoodcourtComp
                key={id}
                routes={product.id?.toString() || ""}
                name={product.product_name}
                price={product.price}
                image={product.product_images}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Foodcourt;
