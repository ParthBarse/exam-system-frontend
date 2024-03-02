import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function ListPayments({ sid, send }) {
  async function fetchPayment() {
    const res = await axios.get(`${baseurl}/getStudentPayment?sid=${sid}`);
    if (res.data.success) {
      setPaymentData(res.data.payments);
      console.log(res.data.payments);
    }
  }
  const baseurl = "https://mcfapis.bnbdevelopers.in";

  const [paymentData, setPaymentData] = useState([]);
  let [deleted, setDeleted] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = async () => {
    fetchPayment();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchPayment();
  }, [deleted]);

  return (
    <div>
      <Button
        className="text-sm text-white px-2 bg-indigo-500"
        style={{ padding: "1px", fontSize: "13px" }}
        onClick={handleOpen}
      >
        View Payments
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-black">
          <div className="border-2 border-black rounded-sm h-10 mt-3 flex justify-between items-center px-2 font-bold text-sm space-x-8 ">
            <p>Amount</p>
            <p>Mode</p>
            <p>Option</p>
            <p>Date</p>
            <p>Download</p>
            <div
              className={
                send ? `flex space-x-2` : "flex items-center justify-center"
              }
            >
              <p>{send ? "Send via " : "Delete"}</p>
            </div>
          </div>
          {paymentData.map((payment) => (
            <div
              className={`border border-black rounded-sm ${
                send ? "h-24" : "h-10"
              } mt-3 flex justify-between space-x-6 items-center px-2 text-sm `}
            >
              <p>₹ {payment.payment_amount}</p>
              <p>{payment.payment_mode}</p>
              <p>{payment.payment_option}</p>
              <p>{payment.payment_date}</p>
              <a target="_blank" href={payment.receipt_url}>
                Download
              </a>
              {!send ? (
                <button
                  className="text-sm text-red-500"
                  onClick={async (e) => {
                    const res = await axios.delete(
                      `${baseurl}/deletePayment?payment_id=${payment.payment_id}&payment_amount=${payment.payment_amount}&sid=${payment.sid}`
                    );
                    setDeleted(deleted + 1);
                  }}
                >
                  Delete
                </button>
              ) : (
                <div className="flex flex-col space-x-4 py-4 space-y-2">
                  <button
                    className="text-sm bg-green-500 px-1"
                    onClick={async (e) => {
                      const res = await axios.get(
                        `${baseurl}/sendReceipt_wp?payment_id=${payment.payment_id}&sid=${payment.sid}`
                      );
                    }}
                  >
                    Whatsapp
                  </button>
                  <button
                    className="text-sm bg-yellow-500"
                    onClick={async (e) => {
                      const res = await axios.get(
                        `${baseurl}/sendReceipt_email?payment_id=${payment.payment_id}&sid=${payment.sid}`
                      );
                    }}
                  >
                    Email
                  </button>
                  <button
                    className="text-sm bg-blue-500"
                    onClick={async (e) => {
                      const res = await axios.get(
                        `${baseurl}/sendReceipt_sms?payment_id=${payment.payment_id}&sid=${payment.sid}`
                      );
                    }}
                  >
                    SMS
                  </button>
                </div>
              )}
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
