import React from "react";

import "./style.scss";

export function Icon({ source }) {
  const SourceComponent = source;
  return (
    <span className="icon">
      <SourceComponent />
    </span>
  );
}
