import React from "react";

import "./style.scss";

export function Technologies({ technologies }) {
  if (!technologies || !technologies.length) {
    return null;
  }

  return (
    <div className="technologies-wrapper">
      <p className="technologies-header">{`These are the technologies I've been practising:`}</p>
      <ul className="technologies-list-wrapper">
        {technologies.map((technologyItem) => (
          <li className="technologies-list" key={technologyItem}>
            {technologyItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
