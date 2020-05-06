import React from "react";
import { StyledContainer } from "../assets/StyledComponents/General";

function FAQ() {
  return (
    <>
      <StyledContainer>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <strong>Why has your risk score gone up suddenly?</strong>
            <br />
            My risk score tends to go up extremely quickly during crises (such
            as the COVID-19 pandemic) due to me being long stocks and never
            shorting any assets. eToro says even if my risk score rises to 7
            though, which is normally the point at which Poipular Investors
            (PIs) are removed from the programme, they will allow me to remain a
            PI due to my long term strategy. Over long periods, my risk score
            tends to revert to a level around 3-4.
          </li>
          <br />
          <li>
            <strong>
              Do you invest in anything other than stocks on eToro?
            </strong>
            <br />
            Outside of eToro I invest in gold and cryptocurrencies, although a
            much smaller amount than that which I have invested in stocks. This
            is just to spread my risk a bit and learn more about trading other
            assets.
          </li>
          <br />
          <li>
            <strong> How much should I copy you with?</strong>
            <br />
            I recommend copying me with a $1000 to start with and adding more if
            you feel comfortable doing so.
            <br />
          </li>
        </ul>
      </StyledContainer>
    </>
  );
}

export default FAQ;
