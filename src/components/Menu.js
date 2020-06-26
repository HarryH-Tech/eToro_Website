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
      <Link style={LinkStyles} to="/">
        <StyledLink animated> Home</StyledLink>
      </Link>
      <div style={vl}></div>

      <Link style={LinkStyles} to="/investments">
        <StyledLink animated> Our Investments</StyledLink>
      </Link>

      <div style={vl}></div>

      <Link style={LinkStyles} to="/FAQ">
        <StyledLink animated>FAQ</StyledLink>
      </Link>

      <div style={vl}></div>

      <Link style={LinkStyles} to="/contact">
        <StyledLink animated>Contact Me</StyledLink>
      </Link>
    </StyledMenu>
  );
}

export default Menu;
