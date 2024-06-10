import { toast } from "@/components/ui/use-toast";
import { verfifyTransaction } from "@/utils/api/transaction";
import { transactionUser } from "@/utils/api/transaction/api";
import { atom, useAtom } from "jotai";
import { ChangeEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const pinAtom = atom(["", "", "", "", "", ""]);
const loadingAtom = atom(false);

const VerifyPin = () => {
  const [pin, setPin] = useAtom(pinAtom);
  const location = useLocation();
  const state = location.state;
  const [loading, isLoading] = useAtom(loadingAtom);
  const navigate = useNavigate();

  if (!state) {
    return <Navigate to={"/"} replace />;
  }

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^[0-9]$/.test(value) && value !== "") return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value !== "" && index < pin.length - 1) {
      document.getElementById(`pin-${index + 1}`)?.focus();
    }

    if (newPin.every((digit) => digit !== "")) {
      const pins = Number(newPin.join(""));
      const pinsString = pins.toString();

      const data = {
        pin: pinsString,
      };
      isLoading(true);
      const response = await verfifyTransaction(data);
      if (response.statusCode == 200) {
        const dataTrx = {
          order_id: state.dataTrx.order_id,
          product_id: state.dataTrx.product_id,
          quantity: state.dataTrx.quantity,
          additional: state.dataTrx.additional,
        };
        const responseTrx = await transactionUser(dataTrx);
        if (responseTrx.statusCode == 201) {
          isLoading(false);
          toast({
            title: "Success transaction",
            description: `${responseTrx.message}`,
          });
          navigate(`/payment-detail?price=${state.dataTrx.price}`);
        }
      } else {
        isLoading(false);
        toast({
          title: "Failed Pin",
          description: `${response.message}`,
        });
      }
    }
  };

  const handleKeyDown = (e: { key: string }, index: number) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      document.getElementById(`pin-${index - 1}`)?.focus();
    }
  };

  return (
    <section className="mt-80">
      <div className="container">
        {loading ? (
          <>
            <div className="flex justify-center items-center">
              <div
                className=" mr-2 h-28 w-28 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-black"
                role="status"
              ></div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center gap-5">
            {pin.map((digit, index) => (
              <input
                key={index}
                id={`pin-${index}`}
                type="password"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
                className="border border-black rounded-xl w-24 h-24 text-center font-extrabold text-2xl shadow-sm shadow-black mobile:w-10 mobile:h-10"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VerifyPin;
