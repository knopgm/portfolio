import React from "react";

import "./style.scss";

export function ColoredBox({ children }) {
  return (
    <div className="colored-box">
      <div className="colored-box__content">{children}</div>
    </div>
  );
}
