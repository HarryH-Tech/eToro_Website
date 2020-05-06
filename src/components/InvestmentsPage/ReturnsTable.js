import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/styles.css";

function ReturnsTable() {
  const [toggleSort, setToggleSort] = useState({
    dateSort: false,
    buyingPrice: false,
    currentPrice: false,
    percentageReturn: false,
  });

  const { dateSort, buyingPrice, currentPrice, percentageReturn } = toggleSort;
  const [data, setData] = useState(null);
  const companyBuyPrices = [
    184.9,
    1783.12,
    152.39,
    198.53,
    63.94,
    142.05,
    36.69,
    86.82,
    329.28,
    269.26,
  ];

  const investmentDates = [
    "07/01/2019",
    "15/10/2018",
    "26/07/2017",
    "04/06/2018",
    "01/10/2018",
    "14/06/2017",
    "11/12/2017",
    "14/06/2017",
    "28/03/2018",
    "30/08/2019",
  ];

  async function fetchData() {
    let response = await axios
      .get(
        `https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL,AMZN,BABA,BRK.B,TSLA,SHOP,SEDG,NEE,VOO,ITOT`
      )
      //      .then((response) => console.log(response.data.companiesPriceList))
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

    // set up the queryselector for getting the indicated
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
    <div>
      <table className="investments-table">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>
              <i
                className={`fas fa-arrow-alt-circle-down rotate ${
                  dateSort ? "down" : ""
                }`}
                onClick={() => {
                  dateSort ? sortTable("up", 2) : sortTable("down", 2);
                }}
              ></i>{" "}
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
                  <td>{company.symbol}</td>
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
      </table>
    </div>
  );
}

export default ReturnsTable;
