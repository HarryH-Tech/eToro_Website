import React from "react";
import { StyledTextContainer } from "../assets/styles/Constants";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "Do you invest in anything other than stocks on eToro?",
      content: `On eToro I only invest in stocks and ETFs. Outside of eToro I invest 
      in gold and cryptocurrencies, although a
      much smaller amount than that which I have invested on eToro.`,
    },
    {
      title: "How long should I copy you for?",
      content: `I recommend copying me for at least 2 years. My investment strategy doesn't guarantee short term returns
      so long term copying is recommended. To read more about the benefits of long term investing over short term 
      you can read more <a href='https://www.cnbc.com/2018/04/06/warren-buffett-and-ray-dalio-agree-on-what-to-do-when-the-market-tanks.html?__source=facebook%7Cmain' target='_blank'>
      here</a>.`,
    },
    {
      title: "How much should I copy you with?",
      content: `You can copy me with any amount as even the minimum of $200 will be enough to cover all open trades.`,
    },
    {
      title:
        "Where do you read about the markets and learn more about investing?",
      content: `I read various news/finance magazines (such as The Economist and The Investors Chronicle) and 
      also enjoy reading books and listening to podcasts about technology, 
      economics, history and science.`,
    },
    {
      title:
        "Why do you not invest in as many companies as other people on eToro?",
      content: `I try to invest only in well run businesses and those that I feel have
      a high chance of growing over the next 5-10 years. For this reason I
      don't invest in many of the businesses that I read about.`,
    },
    {
      title:
        "Is now a good time to copy you? / When is a good time to copy you?",
      content: `There is never specifically a good time to copy me. If you're copying me long term 
      which I do recommend then it doesn't really matter when you decide to copy me as over a longer 
      period, the value of the businesses we invest in will grow regardless of when we invested in them.`,
    },
    {
      title:
        "What should I set my Stop Loss (SL) and Take Profit (TP) at when copying you?",
      content: `Personally I never set a SL or TP. I think if you're planning on investing for the long term
       then market fluctuations are certain to happen and if you're
      investing in a good business then they're nothing to worry about.
      Since I try to invest only in well run businesses I recommend anyone
      copying me to not set a SL or TP and just remain invested for the long
      term. If you absolutely
      feel you must set one or the other then I think setting either at 50%
      seems reasonable.`,
    },
  ],
};

const faqStyles = {
  rowTitleColor: "blue",
};

const faqConfig = {
  animate: true,
};

function FAQ() {
  return (
    <div>
      <hr style={{ padding: "0", margin: "0" }} />
      <div
        id="faq"
        style={{
          textAlign: "justify",
          width: "95%",
          margin: "auto",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>FAQ</h1>
        </div>
        <StyledTextContainer
          border={"2px solid #dfdfdf"}
          borderRadius={"0.6rem"}
          padding={"0 0.6rem"}
          backgroundColor={"#fff"}
        >
          <Faq data={data} styles={faqStyles} config={faqConfig} />
        </StyledTextContainer>
      </div>
    </div>
  );
}

export default FAQ;
