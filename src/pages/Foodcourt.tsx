import { FoodcourtComp, LoadingProduct } from "@/components";
import { Daum, getAllProduct } from "@/utils/api/product";
import { atom, useAtom } from "jotai";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

const productAtom = atom<Daum[]>([]);
const loadingAtom = atom(true);
const currentPageAtom = atom(1);
const paginationAtom = atom(0);
const searchAtom = atom("");

const Foodcourt = () => {
  const [products, setProducts] = useAtom(productAtom);
  const [loading, isLoading] = useAtom(loadingAtom);
  const [currentPage, setCurrentPaginations] = useAtom(currentPageAtom);
  const [pagination, setPaginations] = useAtom(paginationAtom);
  const [search, setSearch] = useAtom(searchAtom);

  const nextPrevPaginate = (e: any) => {
    setCurrentPaginations(e.target.textContent);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.name === "search") {
      setCurrentPaginations(1);
      setSearch(target.value);
    }
  };

  // Call API Product
  const getProducts = useCallback(async () => {
    isLoading(true);
    const response = await getAllProduct(currentPage, search);

    if (response.statusCode == 200) {
      isLoading(false);
      setProducts(response.data.data);
      setPaginations(
        response.data.meta.total_pages > 0 ? response.data.meta.total_pages : 0
      );
    } else {
      isLoading(false);
    }
  }, [currentPage, search]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onPrevClick = () => {
    if (currentPage > 1) {
      setCurrentPaginations((prev) => prev - 1);
    }
  };

  const onNextClick = () => {
    if (currentPage < pagination) {
      setCurrentPaginations(pagination);
    }
  };

  return (
    <section className="relative overflow-auto h-screen py-32">
      <div className="container">
        <div className="flex justify-start gap-5 my-6">
          <span className="text-neutral-600 text-3xl font-bold">Foodcourt</span>
        </div>

        <div className="flex mobile:block justify-between">
          <h5 className="text-neutral-700 font-bold text-xl mobile:mb-2">
            What would your like to eat ?{" "}
            <span className="font-bold text-primary-first">
              <u>{search}</u>
            </span>
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
              name="search"
              onChange={handleChange}
              value={search}
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
          ) : products.length > 0 ? (
            products.map((product, id) => (
              <FoodcourtComp
                key={id}
                routes={product.id?.toString() || ""}
                name={product.product_name}
                price={product.price}
                image={product.product_images}
              />
            ))
          ) : (
            <div className="flex items-center justify-center col-span-12 mt-32 mb-32">
              <p className="col-span-12 text-center animate-bounce text-primary-first font-bold text-3xl">
                No Foodcourt available
              </p>
            </div>
          )}
        </div>
        <nav aria-label="Page navigation example" className="mt-5">
          <ul className="flex items-center gap-4 justify-center -space-x-px h-10 text-base">
            <li>
              <Link
                to="#"
                onClick={onPrevClick}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </Link>
            </li>
            {pagination &&
              [...Array(pagination)].map((_, index) => {
                return (
                  <li key={index}>
                    <Link
                      to="#"
                      onClick={(e) => nextPrevPaginate(e)}
                      className={`flex items-center justify-center px-4 h-10 leading-tight text-black border rounded-xl hover:bg-gray-100 hover:text-gray-700 active:bg-white ${
                        index + 1 == currentPage
                          ? `bg-primary-first`
                          : `bg-white`
                      }`}
                    >
                      {index + 1}
                    </Link>
                  </li>
                );
              })}

            <li>
              <Link
                to="#"
                onClick={onNextClick}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Foodcourt;
