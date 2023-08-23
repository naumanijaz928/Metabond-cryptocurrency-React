import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import AddUser from "../forms/AddForm";
import UpdateUser from "../forms/UpdateForm";
// import DeleteUser from "../forms/DeleteForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "90%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

export default function DataModal({ showModal, data, component }) {
  const [open, setOpen] = showModal;
  let comp = <></>;
  switch (component) {
    case "AddUser":
      comp = <AddUser showModal={showModal} />;
      break;
    case "UpdateUser":
      comp = <UpdateUser data={data} showModal={showModal} />;
      break;

    default:
      break;
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{comp}</Box>
      </Modal>
    </div>
  );
}
