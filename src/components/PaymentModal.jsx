import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedMode, setSelectedMode] = useState("");

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
    setSelectedMode(event.target.value);
  };

  return (
    <div>
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
              >
                {/* Options for Dress Code */}
                <option value="">Select Payment Options </option>
                <option value="totalPayment">Total Payment</option>
                <option value="1installment">1 installment </option>
                <option value="2installment">2 installments </option>
                <option value="3installment">3 installments </option>
                <option value="4installment">4 installments </option>
              </select>
            </label>
            <div className="mt-2" htmlFor="amount">
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter amount"
                className="w-full px-3 py-2 border rounded shadow appearance-none "
              />
            </div>

            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="paymentSelect"
            >
              Select Payment Mode:
              <select
                className="w-full rounded"
                id="paymentSelect"
                value={selectedMode}
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
                id="transaction_id"
                placeholder="Enter transaction id"
              />
            </label>
            <label htmlFor="payment_data">
              Enter Date of Payment:
              <input
                className="w-full mt-2 rounded"
                type="date"
                name="payment_date"
                id="payment_date"
              />
            </label>
          </div>

          <button
            className="text-md w-full text-white px-2 py-1 bg-indigo-500"
            onClick={handleClose}
          >
            Add
          </button>
        </Box>
      </Modal>
    </div>
  );
}
