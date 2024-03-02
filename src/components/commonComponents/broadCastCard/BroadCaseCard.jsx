import React from "react";
import { Card } from "../Cards/Card";
import "./broadCastCard.css";

import ViewDetail from "./ViewDetail";
import TitleAndDescription from "../Title/TitleAndDescription";
const BroadCaseCard = ({ content }) => {
  return (
    <Card className="w-100 h-100 flex-column gap-0.5">
      <div className="h-[75%] w-100 flex-column justify-center align-center">
        <div
          className="h-90 w-90 imageCover"
          style={{
            backgroundImage: `url(${content?.image})`,
          }}
        />
      </div>
      <TitleAndDescription
        className="mx-1 h-[12%] textDesc"
        title={content?.description}
        size={"small"}
      />

      <hr
        className="w-100 h-1"
        style={{
          backgroundColor: "#F0F1F2",
          height: 1,
        }}
      />
      <div className=" w-full h-[12%]">
        <ViewDetail views={content?.views} />
      </div>
    </Card>
  );
};

export default BroadCaseCard;
