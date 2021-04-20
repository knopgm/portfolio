import React from "react";
import classNames from "classnames";

import "./style.scss";

/**
 *
 * @param {*} props
 *  - size = extraLarge, large
 *  - weight = thin
 */
export function DisplayText({ children, size, weight }) {
  return (
    <span
      className={classNames("display-text", {
        "display-text--extraLarge": size === "extraLarge",
        "display-text--large": size === "large",
        "display-text--thin": weight === "thin",
      })}
    >
      {children}
    </span>
  );
}
