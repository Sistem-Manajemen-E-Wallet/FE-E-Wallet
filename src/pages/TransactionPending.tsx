import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Copy } from "lucide-react";
import { Link } from "react-router-dom";
import BCA from "../assets/BCA.png";

const TransactionPending = () => {
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
            <span className="text-neutral-600">Top Up Overview</span>
          </div>
          <div className="flex justify-center">
            <div className="bg-white w-2/3 rounded-xl shadow-lg p-3">
              <div className="flex flex-col space-y-8 p-8">
                <p className="text-lg font-bold">Payment Instructions</p>
                <div className="flex flex-col space-y-4">
                  <p className="font-semibold">Transfer to :</p>
                  <div className="flex gap-3 items-center">
                    <img className="h-5 w-14" src={BCA} />
                    <p className="font-semibold">BCA Virtual Account</p>
                  </div>
                  <div className="flex items-center gap-3 border-2">
                    <input
                      disabled
                      className="w-full bg-[#F4F7FE] rounded-md py-1 px-3 font-bold"
                      value="4756 6272 7921 4553"
                    />
                    <Copy
                      onClick={() => {
                        navigator.clipboard.writeText("4756 6272 7921 4553");
                      }}
                      className="text-gray-500 cursor-pointer"
                      size={20}
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="font-semibold">Total Payment</p>
                  <input
                    disabled
                    className="w-full bg-[#F4F7FE] rounded-md py-1 px-3 font-bold border-2"
                    value="Rp 100.000"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="font-semibold">How to Pay</p>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full shadow-lg px-3 rounded-lg border"
                  >
                    <AccordionItem value="item-1" className="">
                      <AccordionTrigger className="font-semibold">
                        Transfer via ATM
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-decimal pl-5">
                          <li className="text-slate-500">
                            Input kartu{" "}
                            <span className="font-semibold text-slate-600 ">
                              ATM
                            </span>{" "}
                            dan
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              PIN
                            </span>{" "}
                            Anda
                          </li>
                          <li className="text-slate-500">
                            Pilih Menu
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Transaksi Lainnya
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih{" "}
                            <span className="font-semibold text-slate-600 ">
                              Transfer
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Ke Rekening BCA Virtual Account
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Input{" "}
                            <span className="font-semibold text-slate-600 ">
                              Nomor Virtual Account
                            </span>
                            , yaitu
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              4756 6272 7921 4553
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Benar
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih{" "}
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Ya
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Ambil Bukti Bayar Anda
                          </li>
                          <li className="text-slate-500">Selesai</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="font-semibold">
                        Transfer via Internet Banking
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-decimal pl-5">
                          <li className="text-slate-500">
                            Login
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Internet Banking
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Transfer Dana
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih{" "}
                            <span className="font-semibold text-slate-600 ">
                              Transfer ke BCA Virtual Account
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Input
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Nomor Virtual Account
                            </span>
                            , yaitu
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              4756 6272 7921 4553
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Klik
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Lanjutkan
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Klik{" "}
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Kirim
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Bukti bayar ditampilkan
                          </li>
                          <li className="text-slate-500">Selesai</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="font-semibold">
                        Transfer via Mobile Banking
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-decimal pl-5">
                          <li className="text-slate-500">
                            Login
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Mobile Banking
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              m-Transfer
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Pilih{" "}
                            <span className="font-semibold text-slate-600 ">
                              BCA Virtual Account
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Input
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Nomor Virtual Account
                            </span>
                            , yaitu
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              4756 6272 7921 4553
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Klik
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Send
                            </span>
                          </li>
                          <li className="text-slate-500">
                            Informasi
                            <span className="font-semibold text-slate-600 ">
                              {" "}
                              Virtual Account{" "}
                            </span>
                            akan di tampilkan
                          </li>
                          <li className="text-slate-500">
                            Klik{" "}
                            <span className="font-semibold text-slate-600 ">
                              OK
                            </span>
                          </li>
                          <li className="text-slate-500">
                            input{" "}
                            <span className="font-semibold text-slate-600 ">
                              PIN{" "}
                            </span>
                            Mobile Banking
                          </li>
                          <li className="text-slate-500">
                            Bukti bayar ditampilkan
                          </li>
                          <li className="text-slate-500">Selesai</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex justify-end">
                    <Link to={"/history"}>
                      <button className="bg-[#464BD8] text-white w-44 py-2 rounded-xl mt-3 shadow-lg">
                        History
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionPending;