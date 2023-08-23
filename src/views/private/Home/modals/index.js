import React from "react";
import { Modal } from "antd";


export default function DataModal({ showModal, data, component }) {
  const [open, setOpen] = showModal;
  let comp = <></>;
  switch (component) {
    case "ViewDetailGraph":
      comp = <ViewDetailGraph showModal={showModal} data={data} />;
      break;
    default:
      break;
  }
  return (
    <div>
      <Modal
        width={"60%"}
        title="Reading Details"
        visible={open}
        footer={null}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        {comp}
      </Modal>
    </div>
  );
}
