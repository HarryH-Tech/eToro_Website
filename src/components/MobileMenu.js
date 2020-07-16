import React from "react";
import { StyledMobileMenu, StyledLink } from "../assets/styles/Header";
import { Link } from "react-scroll";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMobileMenu open={open}>
      <Link
        onClick={() => setOpen(false)}
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
        onClick={() => setOpen(false)}
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
      <Link
        onClick={() => setOpen(false)}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="faq"
      >
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
        onClick={() => setOpen(false)}
      >
        <StyledLink>
          <p> Contact Me</p>
        </StyledLink>
      </Link>
    </StyledMobileMenu>
  );
};
export default Menu;
