// ABOUT AND CONTACT TOGATHER
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./about.css";
import Footer from "./Footer";
import ig from "../images/ig.png";
import li from "../images/li.png";

const About = () => {
  return (
    <Main>
      <Aboutdiv>
        <span>
          <ul>
            <li>
              We are group of computer engineering students from Government
              Engineering collage of Rajkot in Gujrat.
            </li>
          </ul>
        </span>
        <span>
          <ul>
            <li>
              We are developing a medium where users can get products on rent
              from diffrent tenants with various product range in different
              categories.
            </li>
          </ul>
        </span>
        <span>
          <ul>
            <li>
              If you have any suggetions to do improvements and more fetures we
              can add on website, please contact us from our social media or
              contact us.
            </li>
          </ul>
        </span>
      </Aboutdiv>

      <Container>
        <Each>
          <span>Rathod Mohit</span>
          <Icons>
            <a href="https://www.instagram.com/mohitsrathod_" target="_blank">
              Instagram <img src={ig} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-rathod-83a147190"
              target="_blank"
            >
              Linked In <img src={li} />
            </a>
          </Icons>
          <span>Role : Frontend & Backend Integration with Firebase</span>
        </Each>

        <Each>
          <span>Shivang Simaria</span>
          <Icons>
            <a
              href="https://www.instagram.com/shivang_simaria/"
              target="_blank"
            >
              Instagram <img src={ig} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivang-simaria-a2a008222"
              target="_blank"
            >
              Linked In <img src={li} />
            </a>
          </Icons>
          <span>Role : UI/UX Design of website</span>
        </Each>

        <Each>
          <span>Sojitra Vijay</span>
          <Icons>
            <a
              href="https://www.instagram.com/vijay_patel_5690/"
              target="_blank"
            >
              Instagram <img src={ig} />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-sojitra-544569237"
              target="_blank"
            >
              Linked In <img src={li} />
            </a>
          </Icons>
          <span>Role : Website design Frontend</span>
        </Each>

        <Each>
          <span>Krunal Sakhiya</span>
          <Icons>
            <a
              href="https://www.linkedin.com/in/krunal-sakhiya-b2638a212"
              target="_blank"
            >
              Instagram <img src={ig} />
            </a>
            <a href="https://instagram.com/sk._24_" target="_blank">
              Linked In <img src={li} />
            </a>
          </Icons>
          <span>Role : Website Design Frontend</span>
        </Each>
      </Container>
      <Footer />
    </Main>
  );
};

export default About;

const Aboutdiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: -11111;
  margin: 10px;

  span {
    color: black;
    font-size: 20px;
  }

  a {
    color: red;
    text-decoration: none;
    font-weight: 500;

    :hover {
      color: black;
      border-bottom: 1px solid black;
    }
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin: 10px;

  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Each = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 6px 1px rgba(133, 133, 133, 0.75);
  -webkit-box-shadow: 0px 0px 6px 1px rgba(133, 133, 133, 0.75);
  -moz-box-shadow: 0px 0px 6px 1px rgba(133, 133, 133, 0.75);
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: 260px;
  height: 240px;
  background-color: white;

  span {
    font-size: 16px;
    padding: 10px;

    :first-child {
      font-weight: 500;
    }

    :first-child {
      font-size: 22px;
    }
  }

  a {
    padding: 10px;
    margin: 8px;
    color: red;
    text-decoration: none;
    border: 2px solid transparent;

    font-weight: 500;

    :hover {
      color: black;
      border-radius: 8px;
      border: 2px solid black;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    justify-content: center;
  }
  img {
    width: 24px;
    height: 24px;
    align-self: center;
    margin: 0px 6px 0px 6px;
  }
`;
