import React from "react";
import { StyledContainer } from "../../assets/StyledComponents/General";
import "../../assets/styles.css";

import ReturnsTable from "./ReturnsTable";

function Investments() {
  return (
    <>
      <StyledContainer>
        <p>
          Most of my investments, are in technology based companies as I believe
          these companies have the best potential for large long term growth. I
          also invest in companies in other industries if I think they have good
          growth potential and good management. Since I started investing on
          eToro about 4 years ago my portfolio has outperformed the S&P 500
          every year.
        </p>

        <br />
        <table className="yearly-returns-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Return of The Portfolio</th>
              <th>S&P Return</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2019</td>
              <td>43.47%</td>
              <td>31.48%</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>1.69%</td>
              <td>-6.24%</td>
            </tr>
            <tr>
              <td>2017</td>
              <td>96.73%</td>
              <td>19.42%</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          I only invest in stocks and ETFs on eToro and never short anything.
          Long term stock prices tend to go up and by shorting an asset you can
          only gain 100% if the value drops to zero but you can lose an
          unlimited amount of money if the share price continues to increase.
          <br />
          <br />I invest in well run businesses and use fundamentals to value a
          company. These fundamentals include looking at financial ratios as
          well as the company revenue, customer growth rates and assets/
          liabilities as well as various other factors. I invest for periods of
          at least 3 years as over a longer period avoids being subject to
          unpredictable short term fluctuations in the market.
        </p>
        <br />
        <p>
          Below are mine and my copiers portfolio investment returns since the
          start of 2017, when I began investing on eToro.
        </p>
      </StyledContainer>
      <ReturnsTable />
    </>
  );
}

export default Investments;
