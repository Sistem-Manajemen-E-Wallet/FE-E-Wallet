import profileImage from "../../assets/stand_pecel.jpeg";

const Profile = () => {
  return (
    <div className="my-6">
      <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            className="shadow border absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
            loading="lazy"
            src={profileImage}
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <p className="text-xl font-bold">Pecel lele berkah</p>
          <p className="text-neutral-400">bergabung pada: 03-juni-2024</p>
          <span className="flex items-center justify-start gap-2">
            <button className="py-0.5 px-2 rounded-[10px] bg-rose-400 hover:bg-rose-600 text-white">
              Hapus akun
            </button>
          </span>
        </div>
      </div>

      <div className="max-w-2xl mt-8 flex w-full flex-col border rounded bg-white p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Edit profile
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="text-sm leading-7 text-gray-600">
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm leading-7 text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="text-sm leading-7 text-gray-600"
          >
            Phone number
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
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
          <label htmlFor="image" className="text-sm leading-7 text-gray-600">
            Image
          </label>
          <input
            type="file"
            className="w-full mb-3 mt-1 text-gray-500 font-medium text-sm bg-white file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-neutral-200 file:hover:bg-neutral-300 file:text-neutral-600 rounded"
          />
        </div>

        <button className="rounded border-0 bg-[#464BD8] py-2 px-6 text-lg text-white hover:bg-[#464BD8]/80 focus:outline-none">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Profile;
