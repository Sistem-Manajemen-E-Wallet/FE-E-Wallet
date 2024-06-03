import { HistoryComp } from "../components";

const History = () => {
  return (
    <section className="relative p-0 overflow-auto h-screen py-40">
      <div className="container">
        <HistoryComp
          key={1}
          date="26 Mei 2024  20:15"
          status="Success"
          name="Nasi Goreng"
          type="Payment"
          price={-50000}
        />
        <HistoryComp
          key={1}
          date="26 Mei 2024  19:15"
          status="Waiting for payment"
          name="Pizza"
          type="Payment"
          price={-50000}
        />
        <HistoryComp
          key={2}
          date="26 Mei 2024  10:15"
          status="Waiting for payment"
          name="Nasi Uduk"
          type="Payment"
          price={-50000}
        />
        <HistoryComp
          key={2}
          date="26 Mei 2024  05:15"
          status="Success"
          name="Bank BCA"
          type="Top-Up"
          price={200000}
        />
      </div>
    </section>
  );
};

export default History;
