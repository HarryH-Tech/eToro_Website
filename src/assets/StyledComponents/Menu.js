import styled, { css } from "styled-components";

export const StyledMenu = styled.div`
  background-color: #376ebd;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const StyledLink = styled.div`
  margin: 0.5rem;
  font-weight: bold;

  transform: translate(0%);
  transition: 0.3s ease-out;

  ${(props) =>
    props.animated &&
    css`
      &:hover {
        transform: translate(0%, -20%);
        transition: 0.1s ease-out;
        text-decoration: underline;
        cursor: pointer;
      }
    `}
`;
