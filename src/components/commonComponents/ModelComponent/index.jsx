import React from "react";
import { Modal } from "antd";
import TitleAndDescription from "../Title/TitleAndDescription";
import { ICONS } from "../../../assets/icons";
const ModelComponent = ({
  isOpen,
  isCustomHeader = false,
  customHeader,
  title,
  handleCancel,
  children,
}) => {
  return (
    <Modal
      centered
      open={isOpen}
      footer={null}
      style={{ maxWidth: "400px" }}
      closable={false}
    >
      <div className="p-4">
        <div
          className={`${
            title || isCustomHeader ? "popup-wrapper" : "flex-row flex-end"
          } pr-0 py-1`}
        >
          {isCustomHeader ? (
            customHeader
          ) : (
            <TitleAndDescription size={"medium"} gap={"2px"} title={title} />
          )}

          <div className="m-0 my-auto">
            <img src={ICONS.popupX} alt="x" onClick={handleCancel} />
          </div>
        </div>
        <div className="font-text-gray">{children}</div>
      </div>
    </Modal>
  );
};
export default ModelComponent;
