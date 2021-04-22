import React from "react";

import { Container } from "../Container";
import "./style.scss";

export function PageSection({ anchor, children }) {
  return (
    <section id={anchor} className="page-section">
      <Container>{children}</Container>
    </section>
  );
}
