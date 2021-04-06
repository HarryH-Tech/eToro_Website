import React from "react";
import ReactTooltip from "react-tooltip";

import {
  StyledBackground,
  StyledGrid,
  StyledTooltip,
} from "../assets/styles/Constants";
import { StyledYearlyReturnsTable } from "../assets/styles/InvestmentStrategy";
import { StyledTextContainer } from "../assets/styles/Constants";

function InvestmentStrategy(props) {
  return (
    <StyledBackground
      style={{ backgroundColor: "#ededed" }}
      id="investment_strategy"
    >
      <StyledTextContainer
        border={"2px solid #dfdfdf"}
        width={"80%"}
        borderRadius={"0.6rem"}
        margin={"2rem auto 2rem auto"}
        textAlign="justify"
        padding={"0.6rem"}
        backgroundColor={"#fff"}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Investment Strategy</h1>
        </div>
        <p>
          Most of my investments, are in technology related businesses as I
          believe they have the best long term growth potential. However I also
          invest in companies in other industries if I think they have good
          growth potential and good management to diversify the portfolio so
          we're not dangerously exposed to the tech sector.
        </p>
        <ReactTooltip />

        <StyledYearlyReturnsTable>
          <thead>
            <tr>
              <th>Year</th>
              <th>HarryH1993 Return</th>
              <th>S&P 500 Return</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2020</td>
              <td>115.87%</td>
              <td>16.26%</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>43.47%</td>
              <td>31.48%</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>1.69%</td>
              <td>- 6.24%</td>
            </tr>
            <tr>
              <td>2017</td>
              <td>96.73%</td>
              <td>19.42%</td>
            </tr>
          </tbody>
        </StyledYearlyReturnsTable>

        <p>
          I only invest in stocks and{" "}
          <StyledTooltip data-tip="Exchange Traded Funds">ETFs</StyledTooltip>{" "}
          on eToro and very rarely
          <StyledTooltip data-tip="A type of investment where you make money if the stock falls and lose money if it rises">
            {" "}
            short{" "}
          </StyledTooltip>{" "}
          anything. Long term stock prices tend to go up and by shorting an
          asset you can only gain 100% if the value drops to zero but you can
          lose an unlimited amount of money if the share price continues to
          rise. The only time I may short certain assets is during an extremely
          bearish market to reduce the volatility of the portfolio.
          <br />
          <br />I invest in well run businesses and use fundamentals to value a
          company. These fundamentals include looking at financial ratios as
          well as the company revenue, customer growth rates and assets/
          liabilities as well as various other factors. I aim to invest for
          periods of at least 3 years as investing over a longer period avoids
          being subject to unpredictable short term fluctuations in the market.
        </p>
      </StyledTextContainer>
    </StyledBackground>
  );
}

export default InvestmentStrategy;
