import React from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "Why has your risk score gone up suddenly?",
      content: `My risk score goes up extremely quickly during crises (such as the
            COVID-19 pandemic) due to me being long stocks and never shorting any
            assets. eToro says even if my risk score rises to 7 though, which is
            normally the point at which Popular Investors (PIs) are removed from
            the programme, they will allow me to remain a PI due to my long term
            and no leverage strategy. Over long periods, my risk score tends to
            revert to a level around 3-5.`,
    },
    {
      title: "Do you invest in anything other than stocks on eToro??",
      content: `Outside of eToro I invest in gold and cryptocurrencies, although a
        much smaller amount than that which I have invested in stocks. This is
        just to spread my risk a bit and learn more about trading other
        assets.`,
    },
    {
      title: "How much should I copy you with?",
      content: `I recommend copying me with a $1000 to start with and adding more if
      you feel comfortable doing so.`,
    },
    {
      title:
        "Where do you read about the markets and learn more about investing?",
      content: `I mainly read The Economist and the Financial Times to keep up to date
      with whats going on in the world which aids my investment decisions. I
      also enjoy reading books about technology, economics, history and
      science which also helps me make better investment decisions and learn
      about the world.`,
    },
    {
      title:
        "Why do you not invest in as many companies as other people on eToro?",
      content: `I try to invest only in well run businesses and those that I feel have
      a high chance of growing over the next 5 years. For this reason I
      don't invest in many businesses that I read about, usually because I
      feel they're overvalued.`,
    },
    {
      title:
        "What should I set my Stop Loss (SL) and Take Profit (TP) at when copying you?",
      content: `Personally I very rarely set a SL or TP when I'm investing in a
      business. I think if you're planning on investing for long time
      horizons then market fluctuations are certain to happen and if you're
      investing in a good business then they're nothing to worry about.
      Since I try to invest only in well run businesses I recommend anyone
      copying me to not set a SL or TP and just remain invested for the long
      term. It is a question I get asked a lot however and if you absolutely
      feel you must set one or the other then I think setting either at 50%
      seems reasonable.`,
    },
  ],
};

const faqStyles = {
  titleTextColor: "blue",
  rowTitleColor: "blue",
};

const faqConfig = {
  animate: true,
};

function FAQ() {
  return (
    <>
      <div style={{ padding: "0.8rem" }}>
        <Faq data={data} styles={faqStyles} config={faqConfig} />
      </div>
    </>
  );
}

export default FAQ;
