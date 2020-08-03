import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: #4477ff;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const StyledMenu = styled.div`
  float: right;
  display: ${(props) => props.display};

  @media (max-width: 820px) {
    width: 100%;
    height: 80%;
    font-size: 0.6rem;
    position: absolute;
    margin: 3.5rem auto auto auto;
    background-color: #4477ff;
  }
`;

export const StyledLink = styled.div`
  padding: 0.3rem;
  font-size: 1.1rem;
  margin-left: 0.6rem;
  cursor: pointer;

  &:hover {
    background-color: #2244aa;
    transition: 0.4s ease-in-out;
  }

  @media (max-width: 820px) {
    padding: 0.2rem;
    text-align: center;
    font-size: 0.7rem;
  }
`;

export const StyledBurger = styled.button`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  float: right;
  z-index: 1;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const StyledMobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #4477ff;
  text-align: center;
  opacity: 0.95;
  position: absolute;
  top: 5;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 0.8rem 0.4rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    width: 80%;
    margin: 0.2rem auto;
  }
`;
