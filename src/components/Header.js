import React from "react";
import { StyledHeader } from "../assets/StyledComponents/Header";

function Header(props) {
  return (
    <div>
      <StyledHeader>
        <i style={{ margin: "0.5rem" }} class="fas fa-search-dollar fa-lg"></i>
        HH-Finance
      </StyledHeader>
    </div>
  );
}

export default Header;
