import React from "react";
import { Link } from "react-router-dom";
import { StyledMenu, StyledLink } from "../assets/StyledComponents/Menu";

const LinkStyles = {
  color: "white",
  textDecoration: "none",
  margin: "auto",
};

const vl = {
  borderLeft: "0.2rem solid white",
};

function Menu(props) {
  return (
    <StyledMenu>
      <StyledLink animated>
        <Link style={LinkStyles} to="/">
          Home
        </Link>
      </StyledLink>
      <div style={vl}></div>
      <StyledLink animated>
        <Link style={LinkStyles} to="/investments">
          Our Investments
        </Link>
      </StyledLink>
      <div style={vl}></div>

      <StyledLink animated>
        <Link style={LinkStyles} to="/FAQ">
          FAQ
        </Link>
      </StyledLink>
      <div style={vl}></div>

      <StyledLink animated>
        <Link style={LinkStyles} to="/contact">
          Contact Me
        </Link>
      </StyledLink>
    </StyledMenu>
  );
}

export default Menu;
