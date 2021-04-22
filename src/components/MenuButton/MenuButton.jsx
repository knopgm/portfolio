import classNames from "classnames";
import React from "react";

import "./style.scss";

export function MenuButton({ open, onClick }) {
  return (
    <div
      className={classNames("menu-btn", {
        "menu-btn--open": open,
      })}
      onClick={onClick}
      role="button"
      tabIndex="0"
      onKeyPress={onClick}
    >
      <div className="menu-btn__burger"></div>
    </div>
  );
}
