const CreateProduct = () => {
  return (
    <div>
      <div className="max-w-2xl mt-8 flex w-full flex-col border rounded bg-white p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Create products
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="text-sm leading-7 text-gray-600">
            Product name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
            defaultValue={""}
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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="text-sm leading-7 text-gray-600">
            Image
          </label>
          <input
            type="file"
            className="w-full mb-3 mt-1 text-gray-500 font-medium text-sm bg-white file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-neutral-200 file:hover:bg-neutral-300 file:text-neutral-600 rounded"
          />
        </div>

        <button className="rounded border-0 bg-primary-first py-2 px-6 text-lg text-white hover:bg-primary-first/80 focus:outline-none">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
