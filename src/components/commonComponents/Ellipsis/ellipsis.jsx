import React from "react";

import { Tooltip } from "antd";

const EllipsisComponent = ({ text, maxLength }) => {
  return (
    <div style={{ height: "auto" }}>
      {text?.length >= maxLength ? (
        <>
          {text.slice(0, maxLength)}
          <Tooltip title={text} className="pointer">
            ...
          </Tooltip>
        </>
      ) : (
        <>{text}</>
      )}
    </div>
  );
};

export default EllipsisComponent;
