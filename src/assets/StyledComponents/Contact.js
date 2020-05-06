import styled, { css } from "styled-components";

export const StyledForm = styled.div`
  margin: 2rem auto;
  width: 80%;
  text-align: center;
  padding: 1rem;
  border: 0.1rem solid #eee;
  border-radius: 0.5rem;
  background-color: #fbfbfb;
`;

export const StyledInput = styled.input`
  border-radius: 0.2rem;
  padding: 0.2rem;
  background-color: #f9f9f9;
  margin: auto auto 0.8rem 0.4rem;
  width: 50%;
  height: 1.4rem;
`;

export const StyledTextarea = styled.textarea`
  border-radius: 0.2rem;
  padding: 0.2rem;
  background-color: #f9f9f9;
  margin: auto;
  font-family: arial;
`;

export const StyledThanks = styled.div`
  border-radius: 0.2rem;
  border: 0.1rem solid #44ff44;
  padding: 0.2rem;
  background-color: #88ff88;
  margin: auto;
  width: 60%;
  text-align: center;
`;

export const StyledButton = styled.button`
  border: 0.1rem solid #2255dd;
  border-radius: 0.2rem;
  padding: 0.2rem;
  background-color: #4477ff;
  color: white;
  padding: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: #3366ee;
    box-shadow: 0.1rem 0.1rem 0.2rem #000;
  }

  ${(props) =>
    props.animated &&
    css`
      &:active {
        transform: translate(0%, 10%);
        transition: 0.1s ease-out;
        text-decoration: underline;
      }
    `}
`;
