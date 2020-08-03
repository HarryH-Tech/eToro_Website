import styled from "styled-components";

export const StyledYearlyReturnsTable = styled.table`
  border: 1px solid #ddd;
  border-collapse: collapse;
  padding: 0.4rem;
  margin: 0.5rem auto;
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
  border-radius: 5rem;
  border-collapse: collapse;
  padding: 0.4rem;
  margin: 0.5rem auto;
  width: 80%;
  text-align: center;
  height: 80%;

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
