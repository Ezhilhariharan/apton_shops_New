import React from "react";
import { ICONS } from "../../../assets/icons";
import TitleAndDescription from "../Title/TitleAndDescription";

const CopyLink = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="w-100 p-1 px-4  flex-row space-between">
      <TitleAndDescription size={"small"} gap={"2px"} title={text} />
      <img
        className="cursor-pointer hover:rounded-lg hover:bg-gray-200 "
        onClick={copyToClipboard}
        src={ICONS?.CopyText}
        alt="copyLink"
      />
    </div>
  );
};

export default CopyLink;
