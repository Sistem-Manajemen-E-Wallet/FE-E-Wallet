import { atom, useAtom } from "jotai";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const pinAtom = atom(["", "", "", "", "", ""]);
const VerifyPin = () => {
  const [pin, setPin] = useAtom(pinAtom);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^[0-9]$/.test(value) && value !== "") return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value !== "" && index < pin.length - 1) {
      document.getElementById(`pin-${index + 1}`)?.focus();
    }

    if (newPin.every((digit) => digit !== "")) {
      navigate("/payment-detail", { replace: true });
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
      </div>
    </section>
  );
};

export default VerifyPin;
