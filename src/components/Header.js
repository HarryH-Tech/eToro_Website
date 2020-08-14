import React, { useEffect, useState } from "react";
import { StyledHeader, StyledMenu, StyledLink } from "../assets/styles/Header";

import { Link } from "react-scroll";

import MobileMenu from "./MobileMenu";
import Burger from "./Burger";

function Header() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const { width, height } = windowDimensions;

  const [open, setOpen] = useState(false);
  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.addEventListener("resize", updateWindowDimensions());
  }, [width]);

  function updateWindowDimensions() {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  return (
    <>
      <StyledHeader>
        <div style={{ marginTop: "0.7rem" }}>
          <i
            style={{ fontSize: "2.5rem", margin: "0.8rem", display: "inline" }}
            className="fas fa-search-dollar fa-lg"
          ></i>
          <h1 style={{ fontSize: "2rem", display: "inline", margin: "0.8rem" }}>
            HH-Finance
          </h1>
        </div>
        {width < 820 && <Burger open={open} setOpen={setOpen} />}

        <StyledMenu display={width > 820 ? "flex" : "none"}>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="about_me"
          >
            <StyledLink>
              <p>About Me</p>
            </StyledLink>
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="investment_strategy"
          >
            <StyledLink>
              <p> Investment Strategy</p>
            </StyledLink>
          </Link>
          <Link spy={true} smooth={true} offset={-70} duration={500} to="faq">
            <StyledLink>
              <p> FAQ</p>
            </StyledLink>
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="contact_me"
          >
            <StyledLink>
              <p> Contact Me</p>
            </StyledLink>
          </Link>
        </StyledMenu>
        {open && width < 820 && <MobileMenu open={open} setOpen={setOpen} />}
      </StyledHeader>
    </>
  );
}

export default Header;
