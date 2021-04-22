import React from "react";

import "./style.scss";

export function Technologies(props) {
  return (
    <div calssName="technologies-wrapper">
      <p className="technologies-header">{`These are the technologies I've been practicing:`}</p>
      <ul className="technologies-list-wrapper">
        {props.technologies.map((technologyItem) => (
          <li className="technologies-list" key={technologyItem}>
            {technologyItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
