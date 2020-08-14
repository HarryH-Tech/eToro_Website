import styled from "styled-components";

export const StyledYearlyReturnsTable = styled.table`
  border: 1px solid #ddd;
  border-collapse: collapse;
  padding: 0.4rem;
  margin: auto;
  width: 90%;
  text-align: center;

  th,
  td {
    border: 1px solid #ddd;
    border-collapse: collapse;
    padding: 0.4rem;
    margin: 0.5rem auto;
  }

  tr:hover {
    background-color: #24249e36;
  }
`;

export const StyledPortfolioReturnsTable = styled.table`
  border: 1px solid #ddd;
  border-collapse: collapse;
  padding: 0.4rem;
  margin: auto auto 0.9rem auto;
  width: 80%;
  text-align: center;
  height: 70%;
  transition: 0.2s ease-in;

  &:hover {
    -webkit-box-shadow: 0px 0px 13px 5px rgba(68, 119, 255, 1);
    -moz-box-shadow: 0px 0px 13px 5px rgba(68, 119, 255, 1);
    box-shadow: 0px 0px 13px 5px rgba(68, 119, 255, 1);
  }

  th,
  td {
    border: 1px solid #ddd;
    border-collapse: collapse;
    padding: 0.4rem;
    margin: 0.5rem auto;
  }

  tr:hover {
    background-color: #24249e36;
  }

  caption {
    color: red;
  }
`;
