const Profile = () => {
  return (
    <section className="relative overflow-auto h-screen py-32">
      <div className="py-6 pb-28 bg-slate-100">
        <div className="container">
          <div className="flex justify-start gap-5 my-6">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#525252"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              />
              <path
                fill="#525252"
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              />
            </svg>
            <span className="text-neutral-600">profile</span>
          </div>

          <div className="bg-gradient-to-b from-purple-800 to-[#464BD8] relative overflow-hidden rounded-xl p-5">
            <div className="flex items-center gap-8">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
                className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full"
              />
              <div className="w-fit transition-all transform duration-500">
                <h1 className="text-white font-bold text-lg">Seseorang</h1>
                <p className="text-white font-semibold">Balance</p>
                <span className="text-white font-bold text-xl">
                  Rp. 500.000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-t-3xl border-t border-gray-700 -mt-8 bg-white">
        <div className="container py-6 px-16">
          <h5 className="text-neutral-700 font-bold my-4">Edit profile</h5>
          <form>
            <div className="mb-6">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="fullname"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@gmail.com"
              />
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="alamat"
                defaultValue={""}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="block w-1/2 p-2 text-sm text-gray-900 border rounded border-gray-300 roundedcursor-pointer bg-gray-50"
                id="file_input"
                type="file"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-[#464BD8] hover:bg-[#464BD8]/80 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Edit Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
