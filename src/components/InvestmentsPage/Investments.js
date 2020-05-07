import React from "react";
import { StyledContainer } from "../../assets/StyledComponents/General";
import "../../assets/styles.css";

import ReturnsTable from "./ReturnsTable";

function Investments() {
  return (
    <>
      <StyledContainer>
        <p>
          Most of my investments, as you can see below, are in technology based
          companies as I believe these companies have the best potential for
          large long term growth. I also invest in companies in other industries
          if I think they have good growth potential and have good management.
          Since I started investing on eToro about 3.5 years ago my portfolio
          has outperformed the S&P 500 every year.
        </p>

        <br />
        <table className="yearly-returns-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Our Portfolio Return</th>
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
          I try to invest in well run businesses and use fundamentals to value a
          company rather than using technical analysis or looking at charts.
          These fundamentals include looking at the mainly at the PE
          (Price/Earnings), PEG ((Price/Earnings)/growth) and PB (Price/Book
          Value) ratios as well as the revenue and customer growth rates, assets
          and liabilities as well as various other factors . I invest for
          periods of at least 3 years as over a longer period a good business
          will always significantly increase in value and investing long term
          avoids being subject to unpredictable short term fluctuations in
          price. I avoid buying stocks that see a large price increase over a
          short period of time to avoid becoming a victim of buying into a hyped
          up and overvalued stock and avoiding putting both your, and my, money
          into riskier assets.
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
