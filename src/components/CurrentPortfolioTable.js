import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledPortfolioReturnsTable } from "../assets/styles/InvestmentStrategy";
import "../assets/base.css";

function ReturnsTable() {
  const [toggleSort, setToggleSort] = useState({
    dateSort: false,
    buyingPrice: false,
    currentPrice: false,
    percentageReturn: false,
  });

  const { dateSort, buyingPrice, currentPrice, percentageReturn } = toggleSort;
  const [data, setData] = useState(null);

  const companyNames = [
    "Apple",
    "Amazon",
    "Alibaba",
    "Berkshire Hathaway",
    "Etsy",
    "iShares S&P1500 ETF",
    "Lemonade",
    "Next Era Energy",
    "Niu",
    "Palo Alto Networks",
    "Sea Ltd",
    "Solar Edge",
    "Shopify",
    "Tesla",
    "The Trade Desk",
    "Vanguard S&P500 ETF",
  ];

  const companyBuyPrices = [
    317.61, //AAPL
    1774.28, //AMZN
    152.39, //BABA
    200.72, //BRK.B
    103.06, //ETSY
    66.49, //ITOT
    60.65, //LMND
    194.48, //NEE
    19.84, //NIU
    271.74, //PANW
    147.31, //SE
    85.43, //SEDG

    270.53, //SHOP
    505.5, //TSLA
    461.0, //TTD
    270.43, //VOO
  ];

  const investmentDates = [
    "07/01/2019", //AAPL
    "15/10/2018", //AMZN
    "26/07/2017", //BABA
    "04/06/2018", //BRK.B
    "25/06/2020", //ETSY
    "01/10/2018", //ITOT
    "2008/2020", //LMND
    "14/06/2017", //NEE
    "20/08/2020", //NIU
    "20/08/2020", //PANW
    "17/08/2020", //SE
    "11/12/2017", //SEDG

    "14/06/2017", //SHOP
    "30/04/2019", //TSLA
    "21/07/2020", //TTD
    "30/08/2019", //VOO
  ];

  async function fetchData() {
    let response = await axios
      .get(
        `https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL,AMZN,BABA,BRK.B,ETSY,ITOT,LMND,NEE,NIU,PANW,SE,SEDG,SHOP,TSLA,TTD,VOO?apikey=${process.env.REACT_APP_API_KEY}`
      )
      //  .then((response) => console.log(response));
      .then((response) => setData(response.data.companiesPriceList));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function compareDateValues(date1, date2, direction) {
    date1 = date1.split("/");
    date2 = date2.split("/");

    if (direction === "up") {
      return (
        Number(date2[2] + date2[1] + date2[0]) -
        Number(date1[2] + date1[1] + date1[0])
      );
    }
    if (direction === "down") {
      return (
        Number(date1[2] + date1[1] + date1[0]) -
        Number(date2[2] + date2[1] + date2[0])
      );
    }
  }

  function compareFloatValues(a, b, direction) {
    // return -1/0/1 based on what a and b are.
    let floatA = parseFloat(a);
    let floatB = parseFloat(b);

    if (direction === "up") {
      return floatB < floatA ? -1 : floatA > floatB ? 1 : 0;
    } else if (direction === "down") {
      return floatA < floatB ? -1 : floatA > floatB ? 1 : 0;
    }
  }

  function sortTable(direction, column) {
    switch (column) {
      case 2:
        setToggleSort({
          dateSort: !dateSort,
        });
        break;

      case 3:
        setToggleSort({
          buyingPrice: !buyingPrice,
        });
        break;

      case 4:
        setToggleSort({
          currentPrice: !currentPrice,
        });
        break;

      case 5:
        setToggleSort({
          percentageReturn: !percentageReturn,
        });
        break;

      default:
        return null;
    }

    // get all the rows in this table:
    let table = document.querySelector(".investments-table");
    let rows = Array.from(table.querySelectorAll(`tr`));

    //  ignore the heading row:
    rows = rows.slice(1);

    // set up the query selector for getting the indicated
    // column from a row, so we can compare using its value:
    let qs = `td:nth-child(${column})`;

    // and then just... sort the rows:
    rows.sort((r1, r2) => {
      // get each row's relevant column
      let arr = [];
      let t1 = r1.querySelector(qs);
      let t2 = r2.querySelector(qs);
      arr.push(t1.textContent, t2.textContent);
      // and then effect sorting by comparing their content:
      if (column === 2) {
        if (direction === "up") {
          return compareDateValues(t1.textContent, t2.textContent, "up");
        } else {
          return compareDateValues(t1.textContent, t2.textContent, "down");
        }
      } else if (column !== 2) {
        if (direction === "up") {
          return compareFloatValues(t1.textContent, t2.textContent, "up");
        } else {
          return compareFloatValues(t1.textContent, t2.textContent, "down");
        }
      }
    });
    // then append sorted rows to the table
    rows.forEach((row) => {
      table.appendChild(row);
    });
  }

  return (
    <div style={{ overflow: "auto" }}>
      <StyledPortfolioReturnsTable className="investments-table">
        <caption style={{ color: "black" }}>
          <h3>Current Returns of the Portfolio</h3>
        </caption>
        <thead>
          <tr style={{ backgroundColor: "#fff" }}>
            <th>Company Name (Ticker)</th>
            <th>
              <i
                className={`fas fa-arrow-alt-circle-down rotate ${
                  dateSort ? "down" : ""
                }`}
                onClick={() => {
                  dateSort ? sortTable("up", 2) : sortTable("down", 2);
                }}
              ></i>{" "}
              <br />
              Date of Initial Investment
            </th>
            <th>
              <i
                className={`fas fa-arrow-alt-circle-down rotate ${
                  buyingPrice ? "down" : ""
                }`}
                onClick={() => {
                  buyingPrice ? sortTable("up", 3) : sortTable("down", 3);
                }}
              ></i>{" "}
              <br />
              Price Bought ($)
            </th>
            <th>
              <i
                className={`fas fa-arrow-alt-circle-down rotate ${
                  currentPrice ? "down" : ""
                }`}
                onClick={() => {
                  currentPrice ? sortTable("up", 4) : sortTable("down", 4);
                }}
              ></i>{" "}
              <br />
              Current Price ($)
            </th>
            <th>
              <i
                className={`fas fa-arrow-alt-circle-down rotate ${
                  percentageReturn ? "down" : ""
                }`}
                onClick={() => {
                  percentageReturn ? sortTable("up", 5) : sortTable("down", 5);
                }}
              ></i>{" "}
              <br />
              Percentage Return
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((company, index) => {
              return (
                <tr
                  key={index}
                  className={
                    (
                      ((company.price - companyBuyPrices[index]) /
                        companyBuyPrices[index]) *
                      100
                    ).toFixed(2) > 0
                      ? "green"
                      : "red"
                  }
                >
                  <td>
                    {companyNames[index]} ({company.symbol})
                  </td>
                  <td>{investmentDates[index]}</td>
                  <td>{companyBuyPrices[index]}</td>
                  <td>{company.price} </td>
                  {/*Calculate % return */}
                  <td>
                    {(
                      ((company.price - companyBuyPrices[index]) /
                        companyBuyPrices[index]) *
                      100
                    ).toFixed(2)}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </StyledPortfolioReturnsTable>
    </div>
  );
}

export default ReturnsTable;
