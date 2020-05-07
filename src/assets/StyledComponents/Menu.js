import styled, { css } from "styled-components";

export const StyledMenu = styled.div`
  background-color: #376ebd;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 0.2rem solid #376ebd;
  border-top: 0.2rem solid #376ebd;
`;

export const StyledLink = styled.div`
  margin: 0.5rem;
  font-weight: bold;
  margin: auto;
  text-align: center;
  transform: translate(0%);
  transition: 0.3s ease-out;
  padding: 0.3rem;

  ${(props) =>
    props.animated &&
    css`
      &:hover {
        transform: translate(0%, -15%);
        transition: 0.1s ease-out;
        text-decoration: underline;
        cursor: pointer;
      }
    `}
`;
