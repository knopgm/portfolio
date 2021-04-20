import React from "react";

import "./style.scss";

export function HighlightedText({ children }) {
  return (
    <div className="highlighted-text">
      <span>{children}</span>
    </div>
  );
}
