import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import RadioBank from "../components/Radio";
import { numberWithCommas } from "@/utils/hooks/usePrice";
import { TopUpFormType, topUpSchema } from "@/utils/api/topUp/types";
import { topUp } from "@/utils/api/topUp/api";
import { useToast } from "@/components/ui/use-toast";

const TopUp = () => {
  const [selectedBank, setSelectedBank] = useState<string>("");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<TopUpFormType>({
    resolver: zodResolver(topUpSchema),
    defaultValues: {
      amount: 0,
      channel_bank: "",
    },
  });

  const navigate = useNavigate();

  const handleTopUp = async (data: TopUpFormType) => {
    try {
      const result = await topUp(data);

      navigate(`/top-up-detail?id=${result.data.data.id}`);
    } catch (error) {
      toast({
        title: "Topup Failed",
        description: (error as Error).message,
      });
    }
  };

  return (
    <section className="relative overflow-auto h-screen pt-32">
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
            <span className="text-neutral-600">Top Up</span>
          </div>
          <div>
            <p className="text-2xl font-bold mb-5">Select Method</p>
          </div>
          <form className="flex gap-20" onSubmit={handleSubmit(handleTopUp)}>
            <div className="grid space-y-2">
              <RadioBank
                id="radio-bank-1"
                name="topup-method"
                value="BCA"
                checked={selectedBank === "BCA"}
                onChange={() => {
                  setSelectedBank("BCA");
                  setValue("channel_bank", "BCA");
                }}
                label="BCA Virtual Account"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1199px-Bank_Central_Asia.svg.png"
              />
              <RadioBank
                id="radio-bank-2"
                name="topup-method"
                value="BNI"
                checked={selectedBank === "BNI"}
                onChange={() => {
                  setSelectedBank("BNI");
                  setValue("channel_bank", "BNI");
                }}
                label="BNI Virtual Account"
                imageUrl="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/300px-BNI_logo.svg.png?20240305030303"
              />
              <RadioBank
                id="radio-bank-3"
                name="topup-method"
                value="BRI"
                checked={selectedBank === "BRI"}
                onChange={() => {
                  setSelectedBank("BRI");
                  setValue("channel_bank", "BRI");
                }}
                label="BRI Virtual Account"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/189px-BANK_BRI_logo.svg.png?20180118061811"
              />
              <RadioBank
                id="radio-bank-4"
                name="topup-method"
                value="CIMB"
                checked={selectedBank === "CIMB"}
                onChange={() => {
                  setSelectedBank("CIMB");
                  setValue("channel_bank", "CIMB");
                }}
                label="CIMB Virtual Account"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/CIMB_Niaga_logo.svg/1200px-CIMB_Niaga_logo.svg.png"
              />
            </div>
            <div className="flex-1 container bg-white border border-gray-200 rounded-xl p-5 shadow-lg">
              <h2 className="mb-5 font-semibold">Select Nominal</h2>
              <div className="grid grid-cols-4 gap-4 mb-5">
                {[
                  30000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000,
                ].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="p-4 border border-gray-300 rounded cursor-pointer"
                    onClick={() => setValue("amount", amount)}
                  >
                    Rp {numberWithCommas(amount)}
                  </button>
                ))}
              </div>
              <h2 className="mb-5 font-semibold">Nominal</h2>
              <div className="mb-6">
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Rp."
                  {...register("amount", { valueAsNumber: true })}
                />
                <p className="text-xs text-[#737373]">
                  minimal top up Rp10.000
                </p>
                {errors.amount && (
                  <p className="text-red-500 text-xs">
                    {errors.amount.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="text-white bg-[#464BD8] hover:bg-[#464BD8]/80 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                disabled={isSubmitting}
              >
                Top Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TopUp;
