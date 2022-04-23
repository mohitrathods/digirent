import React from "react";
import styled from "styled-components";
import ig from "../images/ig.png";
import li from "../images/li.png";

const Footer = () => {
  return (
    <Main>
      <Div>
        <span>© 2022 Digirent</span>
      </Div>
      <Divv>
        <a href="#">
          <img src={ig} />
        </a>
        <a href="#">
          <img src={li} />
        </a>
      </Divv>
    </Main>
  );
};

export default Footer;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;

  span {
    font-size: 18px;
    font-weight: 500;
  }

  a {
    padding: 10px;
    margin: 8px;
    color: red;
    text-decoration: none;
    /* border: 2px solid transparent; */

    font-weight: 500;

    :hover {
      color: black;
      border-radius: 8px;
      /* border: 2px solid black; */
    }
  }

  img {
    width: 30px;
    height: 30px;
    transform: scale(1.02, 1.02);
    transition: 0.2s;
    :hover {
      transform: scale(1.02, 1.02);
      transition: 0.2s;
    }
  }
`;

const Div = styled.div``;

const Divv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
