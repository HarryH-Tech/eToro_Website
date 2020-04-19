import React, { useEffect, useState } from "react";
import axios from "axios";

function Investments(props) {
  const [data, setData] = useState();
  const companyBuyPrices = [184.9, 329.28, 184.9];
  async function fetchData() {
    let response = await axios
      .get(
        `https://financialmodelingprep.com/api/v3/stock/real-time-price/AAPL,AMZN,BABA,BRK.B,TSLA,SHOP,SEDG,NEE,JD.CH,TRIG.L,GRG.L,0700.HK,ITOT,VOO`
      )
      //      .then((response) => console.log(response.data.companiesPriceList))
      .then((response) => setData(response.data.companiesPriceList));
  }

  useEffect(() => {
    fetchData();
    console.log(data);
    axios.get("").then((res) => console.log(res));
  }, []);

  console.log(data);

  return (
    <div>
      <p>
        Most of my investments, as you can see below, are in technology based
        companies as I beleive these companies have the best potential for large
        long term growth.
      </p>

      <table>
        <tr>
          <th>Ticker</th>
          <th>Buying Price</th>
          <th>Current Price</th>
          <th>% Return</th>
        </tr>
        <tbody>
          {data &&
            data.map((company, index) => {
              return (
                <tr>
                  <td>{company.symbol}</td>
                  <td>{companyBuyPrices[index]}</td>
                  <td>{company.price}</td>
                  <td>
                    {((company.price - companyBuyPrices[index]) /
                      companyBuyPrices[index]) *
                      100}{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Investments;
