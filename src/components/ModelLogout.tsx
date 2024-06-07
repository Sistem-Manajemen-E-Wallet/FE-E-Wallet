import { ModelLogoutProps } from "@/utils/api/auth";
import { FC } from "react";

const ModelLogout: FC<ModelLogoutProps> = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-gray-900 rounded-xl shadow-xl shadow-slate-800 p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-2 p-1 rounded-full text-gray-400 bg-transparent hover:bg-gray-50 hover:text-gray-600"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModelLogout;
