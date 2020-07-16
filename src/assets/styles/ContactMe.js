import styled, { css } from "styled-components";

export const StyledForm = styled.div`
  margin: 2rem auto;
  width: 80%;
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const StyledInput = styled.input`
  padding: 0.4rem;
  margin: auto auto 0.8rem 0.4rem;
  width: 50%;
  height: 1.4rem;
  border-radius: 0.6rem;
  border: 1px solid #eee;
  transition: 0.3s border-color;

  &:hover {
    border: 1px solid #aaa;
  }
`;

export const StyledTextarea = styled.textarea`
  border-radius: 0.6rem;
  padding: 0.4rem;
  margin: auto;
  font-family: arial;
  border: 1px solid #eee;
  transition: 0.3s border-color;

  &:hover {
    border: 1px solid #aaa;
  }
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
  border: 0.1rem solid #4477ff;
  border-radius: 0.2rem;
  padding: 0.2rem;
  background-color: #4477ff;
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.3s box-shadow;

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
      }
    `}
`;

export const StyledFooter = styled.div`
  background-image: linear-gradient(to bottom, #aaddff, #4477ff);
  height: 15vh;
`;
