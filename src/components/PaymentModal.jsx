import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 6,
};

export default function PaymentModal({ sid }) {
  const baseurl = "https://mcfapis.bnbdevelopers.in";
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedMode, setSelectedMode] = useState("");

  const [paymentData, setPaymentData] = useState({
    sid: sid,
    payment_option: "",
    payment_amount: 0,
    payment_mode: "",
    transaction_id: "",
    payment_date: "",
  });

  const paymentModes = [
    "IMPS",
    "RTGS",
    "NEFT",
    "Credit Card",
    "Debit Card",
    "PayPal",
    "Bank Transfer",
    "GPay",
    "PhonePay",
    "Paytm",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addPayment = async (e) => {
    setLoading(true);
    const response = await axios.post(`${baseurl}/createPayment`, paymentData);
    handleClose();
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        className="text-sm text-white px-2 bg-indigo-500"
        style={{ padding: "1px", fontSize: "13px" }}
        onClick={handleOpen}
      >
        Add payment
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="rounded-md text-sm font-medium text-gray-600"
        >
          <div className="mb-4 space-y-2">
            <label
              htmlFor="payment_option"
              className="block text-sm font-medium text-gray-600"
            >
              Payment Options
              <select
                id="payment_option"
                name="payment_option"
                className="w-full px-3 py-2 border rounded shadow appearance-none"
                value={paymentData.payment_option}
                onChange={handleChange}
              >
                {/* Options for Dress Code */}
                <option value="">Select Payment Options </option>
                <option value="totalPayment">Total Payment</option>
                <option value="1installment">1st Installment </option>
                <option value="2installment">2nd Installments </option>
                <option value="booking">Booking</option>
              </select>
            </label>
            <div className="mt-2" htmlFor="payment_amount">
              <input
                type="number"
                name="payment_amount"
                value={paymentData.payment_amount}
                id="payment_amount"
                placeholder="Enter amount"
                className="w-full px-3 py-2 border rounded shadow appearance-none "
                onChange={handleChange}
              />
            </div>

            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="paymentSelect"
            >
              Select Payment Mode:
              <select
                name="payment_mode"
                className="w-full rounded"
                id="payment_mode"
                value={paymentData.payment_mode}
                onChange={handleChange}
              >
                <option value="">Select Mode</option>
                {paymentModes.map((mode, index) => (
                  <option key={index} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
              {selectedMode && <p>You have selected: {selectedMode}</p>}
            </label>
            <label htmlFor="transaction_id">
              <input
                className="w-full mt-2 rounded"
                type="text"
                name="transaction_id"
                value={paymentData.transaction_id}
                id="transaction_id"
                placeholder="Enter transaction id"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="payment_data">
              Enter Date of Payment:
              <input
                className="w-full mt-2 rounded"
                type="date"
                value={paymentData.payment_date}
                name="payment_date"
                id="payment_date"
                onChange={handleChange}
              />
            </label>
          </div>

          <button
            className="text-md w-full text-white px-2 py-1 bg-indigo-500"
            onClick={addPayment}
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </Box>
      </Modal>
    </div>
  );
}
