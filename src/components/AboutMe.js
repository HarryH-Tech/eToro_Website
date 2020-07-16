import React from "react";
import background from "../assets/images/AboutMeBackground.jpg";
import me from "../assets/images/Me.png";
import {
  StyledTextContainer,
  StyledBackgroundImg,
} from "../assets/styles/Constants";

function AboutMe(props) {
  return (
    <>
      <StyledBackgroundImg
        background={background}
        id="about_me"
        height={"100%"}
      >
        <StyledTextContainer
          border={"2px solid #dfdfdf"}
          width={"80%"}
          borderRadius={"0.6rem"}
          margin={"4rem auto 4rem auto"}
          textAlign="justify"
          padding={"0.6rem"}
          backgroundColor={"#fff"}
        >
          <div style={{ textAlign: "center" }}>
            <img src={me} alt="Me" style={{ borderRadius: "4rem" }} />
            <h1>ABOUT ME</h1>
          </div>
          <p style={{ width: "80%", margin: "auto" }}>
            I’ve been interested in finance and investing my whole life and
            enjoy reading about economics and businesses as well as science and
            technology.
            <br />
            <br />
            Although I have no academic experience in investing or finance, I've
            learnt a lot about them both through reading and since I started
            investing on eToro in 2017, have outperformed the market every year.
          </p>
        </StyledTextContainer>
      </StyledBackgroundImg>
    </>
  );
}

export default AboutMe;
