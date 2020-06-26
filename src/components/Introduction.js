import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "..//assets/StyledComponents/General";

function Introduction() {
  return (
    <StyledContainer>
      <p>
        Hi,
        <br />
        <br />
        If you're copying me on eToro, or interested in doing so, then you're in
        the right place. I made this website to give you more information about
        me and my ideas about investing. It also gives you a way to contact me
        privately if you want to.
        <br />
        <br />
        I’ve been interested in economics and investing my whole life and still
        enjoy reading about the history of economic ideas and businesses as well
        as science and technology. I also keep up to date with current affairs
        as well the health of the global economy to help me make better
        investment decisions.
        <br />
        <br />
        On eToro I only invest in stocks and ETFs. However outside of eToro I do
        own some Gold and a few cryptocurrencies but this is only to learn more
        about how they behave as an investment as well as the blockchain
        technology behind cryptocurrencies.
        <br />
        <br />
        If you want to sign up to eToro either to copy me and/or invest your
        money you can do so using this{" "}
        <a
          href="https://partners.etoro.com/B13535_A90354_TClick.aspx"
          target="blank"
        >
          link
        </a>
        .
        <br />
        <br />
        Thanks for reading this and if you ever have any questions for me, don't
        hesitate to contact me using the contact form{" "}
        <Link to="/contact">here</Link>. 😃
      </p>
    </StyledContainer>
  );
}

export default Introduction;
