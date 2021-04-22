import React, { useState } from "react";
import classNames from "classnames";

import resume from "../../assets/knop.gm@gmail.com.pdf";
import { useLockBodyScroll } from "../../utilities/hooks";
import { Container } from "../Container";
import { MenuButton } from "../MenuButton";

import "./style.scss";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  function closeMenu() {
    setIsOpen(false);
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classNames("nav", { "nav--open": isOpen })}>
      <Container>
        <div className="nav__menu-button-wrapper">
          <MenuButton open={isOpen} onClick={handleClick} />
        </div>

        <nav>
          <ul className="nav__list">
            <li>
              <a href="#welcome" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Work
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
              <a
                href={resume}
                rel="noreferrer"
                target="_blank"
                onClick={closeMenu}
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
