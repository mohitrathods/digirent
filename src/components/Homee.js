import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Firebasefetch from "../firebaseFetch/Firebasefetch";
import NewOne from "../firebase_upload/NewOne";
import UploadtoFb from "../firebase_upload/UploadtoFb";
import home from "../images/home.png";
import tiger from "../images/tiger.jpg";
import Footer from "./Footer";

const Homee = () => {
  return (
    <MaintenantDiv>
      <Top>
        {/* left div */}
        <Left>
          <span className="spanone">
            Discover a new way to get products on Rent
          </span>

          <span className="spantwo">Products on Rent</span>

          <span>
            The mordern way to get products on Rent with affordable price. Fast,
            affordable, reliable E-service.
          </span>

          <p>If you want to use the item for a while, Don't buy a new one.</p>
          <p>Get item on Rent from our website </p>

          <Buttons>
            <a href="#toproducts">Order Now</a>
            <Link to="/tenant">Become tenant</Link>
          </Buttons>
        </Left>
        <Right>
          <img src={home} alt="img" />
        </Right>
      </Top>

      {/* bottom div */}
      <Bottom id="toproducts">
        <EachCard>
          <Link id="clothes" to="/clothes" target="_blank">
            Clothes
          </Link>
        </EachCard>

        <EachCard>
          <Link id="videoshooting" to="/video" target="_blank">
            Video Shooting Equpments
          </Link>
        </EachCard>

        <EachCard>
          <Link id="books" to="/books" target="_blank">
            Books
          </Link>
        </EachCard>

        <EachCard>
          <Link id="powertools" to="/powertools" target="_blank">
            Power Tools
          </Link>
        </EachCard>

        <EachCard>
          <Link id="vehicles" to="/vehicles" target="_blank">
            Vehicles
          </Link>
        </EachCard>
      </Bottom>
      {/* <Firebasefetch /> */}
      <Footer />
    </MaintenantDiv>
  );
};

export default Homee;

const MaintenantDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 40px;

  @media screen and (max-width: 430px) {
    flex-direction: column;
    a {
      width: fit-content;
    }
  }

  a {
    padding: 8px;
    font-weight: 500;
    background-color: white;
    border-radius: 6px;
    text-decoration: none;
    margin: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 21px 0px rgba(204, 204, 204, 0.75);
    -webkit-box-shadow: 0px 0px 21px 0px rgba(204, 204, 204, 0.75);
    -moz-box-shadow: 0px 0px 21px 0px rgba(204, 204, 204, 0.75);
    transition: 0.2s;

    :hover {
      box-shadow: none;
      transition: 0.2s;
    }

    :first-child {
      color: black;

      font-size: 16px;
    }

    :last-child {
      color: #d93936;
    }
  }
`;

/**TOP DIV */
const Top = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-end;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px 10px 100px 10px;
  padding: 10px;

  text-align: left;

  p {
    margin: 0px;
    padding: 8px;
    font-size: 18px;
  }

  span {
    margin: 4px;

    :first-child {
      color: #d93936;
      font-size: 20px;
    }

    :nth-child(2) {
      color: black;
      font-size: 38px;
      font-weight: 500;
    }

    :nth-child(3) {
      font-size: 18px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  margin: 10px;
  img {
    width: 600px;
    height: 500px;

    @media screen and (max-width: 990px) {
      display: none;
    }
  }
`;

/**BOTTOM DIV */
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
`;

const EachCard = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    width: fit-content;
    margin: 20px;
    padding: 20px;
    background-color: white;
    transition: 0.4s;
    box-shadow: 0px 0px 10px 2px rgba(179, 179, 179, 0.75);
    -webkit-box-shadow: 0px 0px 10px 2px rgba(179, 179, 179, 0.75);
    -moz-box-shadow: 0px 0px 10px 2px rgba(179, 179, 179, 0.75);
    text-decoration: none;
    font-size: 26px;
    color: gray;
    border-radius: 10px;
    font-weight: 400;

    @media screen and (max-width: 400px) {
      padding: 10px;
      font-size: 20px;
      margin: 10px;
    }

    :hover {
      color: #d33639;
      transition: 0.4s;
      box-shadow: 0px 0px 6px 1px rgba(179, 179, 179, 0.75);
      -webkit-box-shadow: 0px 0px 6px 1px rgba(179, 179, 179, 0.75);
      -moz-box-shadow: 0px 0px 6px 1px rgba(179, 179, 179, 0.75);
    }
  }
`;
