import React from "react";
import me from "../assets/images/Me.jpg";
import {
  StyledTextContainer,
  StyledBackground,
  StyledTooltip,
} from "../assets/styles/Constants";

function AboutMe(props) {
  return (
    <>
      <StyledBackground id="about_me" height={"75% !important"}>
        <StyledTextContainer
          border={"2px solid #dfdfdf"}
          width={"70%"}
          borderRadius={"0.6rem"}
          margin={"5rem auto 3rem auto"}
          textAlign="justify"
          padding={"0.6rem"}
          backgroundColor={"#fff"}
        >
          <div style={{ textAlign: "center" }}>
            <img src={me} alt="Me" style={{ borderRadius: "4rem" }} />
            <h1>About Me</h1>
          </div>
          <p style={{ width: "80%", margin: "auto" }}>
            I've enjoyed reading and learning about science and technology my
            whole life and most of my investments are related to these areas.
            I'm a long term investor and first started investing in 2012. I try
            to invest in well run businesses and use fundamentals to value a
            company. I never set a take profit or stop loss as these don't suit
            investors aiming at long term growth.
            <br />
            <br />I can't lie, I have no academic experience in investing or
            finance. I've learnt about them both through reading, talking to
            people and following the market. Since I started investing on eToro
            in 2017, I've outperformed the{" "}
            <StyledTooltip
              data-multiline={true}
              data-tip="A stock market index that <br /> measures  the  performance of 500 <br />large companies listed on stock <br />exchanges in the United States."
            >
              S&P 500
            </StyledTooltip>{" "}
            every year.
            <br />
            <br />
            If you wish to copy me on eToro you can dog{" "}
            <a href="https://www.etoro.com/people/harryh1993" target="_blank">
              here
            </a>{" "}
            (login/signup required).
          </p>
        </StyledTextContainer>
      </StyledBackground>
      <hr style={{ padding: "0", margin: "0" }} />
    </>
  );
}

export default AboutMe;
