import React from "react";
import { Link } from "react-router-dom";
import { StyledMenu, StyledLink } from "../assets/StyledComponents/Menu";

const LinkStyles = {
  color: "white",
  textDecoration: "none",
};

function Menu(props) {
  return (
    <StyledMenu>
      <StyledLink animated>
        <Link style={LinkStyles} to="/">
          Introduction
        </Link>
      </StyledLink>

      <StyledLink animated>
        <Link style={LinkStyles} to="/investments">
          My Investments
        </Link>
      </StyledLink>

      <StyledLink animated>
        <Link style={LinkStyles} to="/FAQ">
          FAQ
        </Link>
      </StyledLink>

      <StyledLink animated>
        <Link style={LinkStyles} to="/contact">
          Contact Me
        </Link>
      </StyledLink>
    </StyledMenu>
  );
}

export default Menu;
