import React from "react";
import { ColoredBox } from "../../../../components/ColoredBox";
import { profileImage } from "./images";

import "./style.scss";

export function Avatar() {
  return (
    <div className="content">
      <ColoredBox>
        <div className="avatar">
          <img
            className="perfil-img"
            src={profileImage}
            id="image"
            alt="perfil 3x3"
          />
        </div>
      </ColoredBox>
    </div>
  );
}
