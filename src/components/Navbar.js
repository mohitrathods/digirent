import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import cartt from "../images/cartt.png";
import menu from "../images/menu.png";
import close from "../images/close.webp";

const Navbar = () => {
  const [clicked, setClicked] = useState(false); //while reload don't show anything

  return (
    <>
      <MainDiv>
        <Link to="/">Digirent</Link>

        <DropDown>
          <Dropbtn>Categories</Dropbtn>

          <DropContent>
            <Link to="/clothes" target="_blank">
              Clothes
            </Link>
            <Link to="/video" target="_blank">
              Shooting Equipments
            </Link>
            <Link to="/books" target="_blank">
              Books
            </Link>
            <Link to="/powertools" target="_blank">
              Power Tools
            </Link>
            <Link to="/vehicles" target="_blank">
              Vehicles
            </Link>
          </DropContent>
        </DropDown>

        <Links>
          <Link to="/tenant">BecomeTenant</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </Links>

        {/* <button>Sign in</button> */}

        {/* <Link to="/checkout" className="cartbutton">
        <img src={cartt} alt="cart" />
      </Link> */}
      </MainDiv>
      {clicked ? (
        <>
          <Close onClick={() => setClicked(false)}>
            <img src={close} alt="" />
          </Close>
          <div className="another">
            <Link to="/tenant">BecomeTenant</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>
          </div>
        </>
      ) : null}

      {clicked ? null : (
        <Menu onClick={() => setClicked(true)}>
          <img src={menu} alt="" />
        </Menu>
      )}
    </>
  );
};

export default Navbar;

const Links = styled.div`
  display: flex;
  @media screen and (max-width: 840px) {
    display: none;
  }
  z-index: 111;
`;

const Menu = styled.div`
  margin: 10px;
  font-size: 20px;
  position: fixed;
  top: 88px;
  left: 10px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 8px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0px 0px 6px 1px rgba(255, 147, 147, 0.75);
    -webkit-box-shadow: 0px 0px 6px 1px rgba(255, 147, 147, 0.75);
    -moz-box-shadow: 0px 0px 6px 1px rgba(255, 147, 147, 0.75);
  }
  @media screen and (min-width: 840px) {
    display: none;
  }
`;
const Close = styled.div`
  margin: 10px;
  cursor: pointer;

  /* z-index: -111; */
  font-size: 20px;
  position: fixed;
  top: 88px;
  @media screen and (min-width: 840px) {
    display: none;
  }
  left: 10px;

  img {
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0px 0px 6px 1px rgba(255, 147, 147, 0.75);
    -webkit-box-shadow: 0px 0px 6px 1px rgba(255, 147, 147, 0.75);
    -moz-box-shadow: 0px 0px 6px 1px rgba(255, 147, 147, 0.75);
  }
`;
const Another = styled.div``;

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;

  position: sticky;
  top: 0;

  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);

  a {
    margin: 20px;
    padding: 10px;
    color: #d93936;
    text-decoration: none;
    font-size: 26px;
    font-weight: 500;

    /* @media screen and (max-width: 500px) {
      margin: 0px;
      font-size: 22px;
    } */

    :first-child {
      font-weight: 700;
      display: flex;
      flex: 1;
    }

    :hover {
      color: gray;
    }
  }

  button {
    margin: 10px;
    padding: 8px;
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    background-color: transparent;
    border-radius: 8px;
    border: none;

    box-shadow: 0px 0px 21px 0px rgba(204, 204, 204, 0.75);
    -webkit-box-shadow: 0px 0px 21px 0px rgba(204, 204, 204, 0.75);
    -moz-box-shadow: 0px 0px 21px 0px rgba(204, 204, 204, 0.75);

    transition: 0.2s;

    :hover {
      color: #d93936;
      transition: 0.2s;

      box-shadow: 0px 0px 10px 0px rgba(117, 117, 117, 0.75);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(117, 117, 117, 0.75);
      -moz-box-shadow: 0px 0px 10px 0px rgba(117, 117, 117, 0.75);
    }
  }
`;

const Dropbtn = styled.div`
  margin: 20px;
  padding: 10px;
  color: #d93936;
  text-decoration: none;
  font-size: 26px;
  font-weight: 500;

  @media screen and (max-width: 910px) {
    /* margin: 10px; */
    font-size: 22px;
  }

  cursor: pointer;
  :hover {
    color: gray;
  }
`;

const DropContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;

  margin-top: 70px;

  box-shadow: 0px 3px 6px 1px rgba(143, 143, 143, 0.75);
  -webkit-box-shadow: 0px 3px 6px 1px rgba(143, 143, 143, 0.75);
  -moz-box-shadow: 0px 3px 6px 1px rgba(143, 143, 143, 0.75);

  display: none;
  position: absolute;

  a {
    display: block;

    text-align: left;
    font-size: 18px;
    font-weight: 400;
    margin: 4px;
    padding: 4px;

    :first-child {
      text-align: left;
      font-size: 18px;
      font-weight: 400;
      margin: 4px;
      padding: 4px;
    }
  }

  ${Dropbtn} {
    :hover {
      display: block;
    }
  }
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;

  :hover {
    ${DropContent} {
      display: block;
    }
  }
`;
