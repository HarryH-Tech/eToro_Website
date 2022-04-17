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
            <br />
            I've learnt about investing both through reading, talking to people
            and following the market. Since I started investing on eToro in 2017
            my total returns are over 400%.
            <br />
            <br />
            If you wish to copy me on eToro you can do so{" "}
            <a
              href="https://www.etoro.com/people/harryh1993"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>{" "}
            (sign-up/login required).
            <br />
            <h3 style={{textAlign: "center"}}>Reviews/Interviews</h3>
            <a
              href="https://www.youtube.com/watch?v=eisfKNRVx74&t=92s"
              rel="noopener noreferrer"
              target="_blank"
            >
               Profile/Portfolio Video Review By Felixfallax
            </a> 
            <br />  <br /> 
            <a href="https://www.youtube.com/watch?v=ikrraQerYwk&t=57s&ab_channel=CopyTradingTV" target="_blank">  Profile/Portfolio Video Review By Copy Trading TV</a>
            <br />  <br /> 
             <a href="https://www.youtube.com/watch?v=7Uur7s01AmQ&t=444s&ab_channel=CopytradersClub" target="_blank">Podcast Interview With CopyTraders Club</a>
             <br />  <br />
           
          </p>
        </StyledTextContainer>
      </StyledBackground>
      <hr style={{ padding: "0", margin: "0" }} />
    </>
  );
}

export default AboutMe;
