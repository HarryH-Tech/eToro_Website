import React from "react";
import { StyledContainer } from "..//assets/StyledComponents/General";

function PageNotFound(props) {
  return (
    <StyledContainer
      style={{ backgroundColor: "#ff9999", textAlign: "center" }}
    >
      <h1>
        Sorry!
        <span aria-label="sad emoji" role="img">
          😞
        </span>
      </h1>
      <br />
      <strong> The Page You Were Looking For Could Not Be Found.</strong>
    </StyledContainer>
  );
}

export default PageNotFound;
