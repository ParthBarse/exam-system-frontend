import * as React from "react";
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
  p: 4,
};

export default function PaymentModal({ sid }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Box sx={style} className="rounded-md">
          <div className="mb-4">
            <label
              htmlFor="payment_option"
              className="block text-sm font-medium text-gray-600"
            >
              Payment Options
            </label>
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
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter amount"
              className="w-full px-3 py-2 border rounded shadow appearance-none mt-2"
            />
          </div>
          <button
            className="text-sm text-white px-2 rounded-sm bg-indigo-500"
            onClick={handleClose}
          >
            Add
          </button>
        </Box>
      </Modal>
    </div>
  );
}
