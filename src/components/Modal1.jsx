import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { baseurl } from "../utils/domain";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal1({
  modalOpen,
  sid,
  fetchData,
  entrance,
  visiting,
  admission,
  medical,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeStatus = async (status) => {
    const res = await axios({
      method: "put",
      url: `${baseurl}/changeStatus`,
      data: {
        sid,
        new_status: status,
      },
    });
    fetchData();
    handleClose();
  };

  useEffect(() => {
    console.log(sid);
    setOpen(modalOpen);
  }, [modalOpen]);
  return (
    <div>
      <button
        className="text-sm text-white px-2 bg-indigo-500 w-full h-full"
        style={{ padding: "1px", fontSize: "13px" }}
        onClick={handleOpen}
      >
        More
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
        <Box sx={style} className="flex gap-3">
          <a
            target="_blank"
            href={entrance}
            className="border border-solid p-2 px-4 bg-red-500 text-white min-w-[130px]"
          >
            Entrance Card
          </a>
          <a
            target="_blank"
            href={visiting}
            className="border border-solid p-2 px-4 bg-yellow-400 text-white min-w-[130px]"
            // onClick={() => handleChangeStatus("Refund")}
          >
            Visiting Card
          </a>
          <a
            target="_blank"
            href={medical}
            className="border border-solid p-2 px-4 bg-blue-500 text-white min-w-[130px]"
            // onClick={() => handleChangeStatus("Extend")}
          >
            Medical Certificate
          </a>
          <a
            target="_blank"
            href={admission}
            className="border border-solid p-2 px-4 bg-blue-500 text-white min-w-[130px]"
            // onClick={() => handleChangeStatus("Extend")}
          >
            Admission Form
          </a>
        </Box>
      </Modal>
    </div>
  );
}
