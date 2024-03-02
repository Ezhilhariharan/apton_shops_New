import React from "react";
import { ICONS } from "../../../assets/icons";
import { kFormatter } from "../../../helper";
import "./broadCastCard.css";
import TitleAndDescription from "../Title/TitleAndDescription";
const ViewDetail = ({ views }) => {
  return (
    <div className="flex-row space-between">
      <span className="flex-row flex-center textBold m-auto gap-0.5">
        <img
          src={ICONS?.DoubleTickIcon}
          alt="share"
          className="shareIcons m-auto"
        />
        <TitleAndDescription title={kFormatter(views?.like)} size={"small"} />
      </span>
      <span className="flex-row textBold m-auto gap-0.5">
        <img src={ICONS?.EyeIcon} alt="share" className="shareIcons m-auto" />
        <TitleAndDescription title={kFormatter(views?.watch)} size={"small"} />
      </span>
      <span className="flex-row textBold m-auto gap-0.5">
        <img
          src={ICONS?.MagnetIcon}
          alt="share"
          style={{ height: "2vh", width: "2vh" }}
          className=" m-auto"
        />
        <TitleAndDescription title={kFormatter(views?.share)} size={"small"} />
      </span>
    </div>
  );
};
export default ViewDetail;
