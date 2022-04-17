import styled from "styled-components";

export const StyledTextContainer = styled.div`
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};

`;

export const StyledTooltip = styled.span`
  color: blue;
`;
export const StyledBackground = styled.div`
  height: ${(props) => props.height};
  width: 100%;
  /**** DO NOT CHANGE PADDING BELOW
  when set top/bottom padding with just the padding
  declaration does not have desired effect ****/
  padding-top: 0.6rem;
  background-image: url(${({ background }) => background});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;
