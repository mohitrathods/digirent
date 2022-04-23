import React from "react";
import styled from "styled-components";
// import { app } from "../firebase";
import contact from "../images/contact.png";
import contactt from "../images/contactt.png";
import contacttt from "../images/contacttt.png";
import { useState } from "react";
import { db, storage } from "../firebase";
import Footer from "./Footer";

const Contact = () => {
  // setting user
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postDataondb = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = user;

    if (name && email && phone && message) {
      const res = await fetch(
        // "https://mohit-rathod-portfolio-default-rtdb.firebaseio.com/clientcontacts.json",
        "https://deproject-8dc4f-default-rtdb.firebaseio.com/contact.json",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        alert("Submitted Succesfully");
      }
    } else {
      alert("please fill all the data");
    }
  };

  return (
    <Maindiv>
      <Topdiv>
        {/* FIRST TWO SPANS */}
        <Span>
          <span>Contact us</span>

          <span>Get in touch and let us know how we can help.</span>
        </Span>
        {/* THREE CARDS */}
        <Cards>
          <Each>
            <img src={contact} />
            <span>Sales</span>
            <span>We'd love to talk about how we can work together</span>
            <a href="#contact">Contact Sales</a>
          </Each>

          <Each>
            <img src={contactt} />
            <span>Help & Support</span>
            <span>We're here to help with any questions</span>
            <a href="#contact">Get Support</a>
          </Each>

          <Each>
            <img src={contacttt} />
            <span>Media & press</span>
            <span>Get Stripe news, company info & media resources</span>
            <a href="#contact">Visit Newsroom</a>
          </Each>
        </Cards>

        {/* OTHER COMMUNICATION */}

        <Spans>
          <Spandesign>
            <span>Join us on IRC</span>
            <span>
              If you have technical questions, chat live with developers in
              #stripw on freenode
            </span>
          </Spandesign>

          <Spandesign>
            <span>General communication</span>
            <span>
              For general queries including partnership oppertunities, please
              Email : info@digirent.com
            </span>
          </Spandesign>
        </Spans>
      </Topdiv>

      <BottomdivForm id="contact">
        <Inputdiv>
          <span>Enter your name</span>
          <input
            placeholder="Enter Your Name"
            type="text"
            autoComplete="off"
            onChange={getUserData}
            name="name"
            value={user.name}
            required
          />
        </Inputdiv>
        <Inputdiv>
          <span>Enter your Email</span>
          <input
            placeholder="Enter Your Email"
            type="email"
            autoComplete="off"
            onChange={getUserData}
            name="email"
            value={user.email}
            required
          />
        </Inputdiv>
        <Inputdiv>
          <span>Your Phone number</span>
          <input
            placeholder="Your Number"
            type="tel"
            autoComplete="off"
            onChange={getUserData}
            value={user.phone}
            name="phone"
            required
          />
        </Inputdiv>
        <Inputdiv>
          <span>Write Message</span>
          <textarea
            placeholder="Write Here"
            autoComplete="off"
            onChange={getUserData}
            value={user.message}
            name="message"
            required
          />
        </Inputdiv>

        <button onClick={postDataondb}> Submit</button>
      </BottomdivForm>
      <Footer />
    </Maindiv>
  );
};

export default Contact;

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  /* scroll-padding-top: 100px; */
`;

const Topdiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  span {
    padding: 10px;

    :first-child {
      font-size: 46px;
      font-weight: 500;
      color: #d93936;
    }

    :last-child {
      font-size: 24px;
      color: gray;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Each = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  margin: 10px;
  /* padding: 10px; */

  width: 100%;
  max-width: 260px;
  max-height: 200px;

  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(181, 181, 181, 0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(181, 181, 181, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(181, 181, 181, 0.75);

  @media screen and (max-width: 880px) {
    margin: 30px 10px 30px 10px;
  }

  span {
    padding: 8px;

    :nth-child(2) {
      color: #d93936;
      font-weight: 500;
      font-size: 20px;
    }

    :nth-child(3) {
      color: gray;
      font-size: 16px;
      font-weight: 400;
    }
  }

  img {
    width: 60px;
    height: 60px;
    align-self: center;
    border-radius: 50%;
    padding: 8px;
    margin-top: -40px;
    background-color: white;

    box-shadow: 0px 0px 10px 0px rgba(158, 158, 158, 0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(158, 158, 158, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(158, 158, 158, 0.75);
  }

  a {
    background-color: #f8f8f8;
    color: #d93936;
    cursor: pointer;
    font-size: 20px;
    padding: 6px;
    border-radius: 0px 0px 8px 8px;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    :hover {
      color: red;
    }
  }
`;

const Spans = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
`;

const Spandesign = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px;
  padding: 8px;

  span {
    padding: 6px;

    :first-child {
      color: #d93936;
      font-size: 18px;
      font-weight: 500;
    }

    :last-child {
      font-size: 14px;
      font-weight: 400;
      color: gray;
    }
  }
`;

/**BOTTOM DIVISION STYLES */
const BottomdivForm = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
  padding: 10px;
  background-color: white;

  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(181, 181, 181, 0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(181, 181, 181, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(181, 181, 181, 0.75);

  button {
    margin: 12px;
    padding: 8px;
    background-color: white;
    color: #d33936;
    font-size: 22px;
    box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 0.75);
    -webkit-box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 0.75);
    -moz-box-shadow: 0px 0px 10px 1px rgba(189, 189, 189, 0.75);

    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      transition: 0.2s;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.75);
    }

    :active {
      color: black;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;

const Inputdiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 300px;

  @media screen and (max-width: 330px) {
    width: 100%;
    max-width: 260px;

    span {
      font-size: 18px;
      margin: 8px;
    }
    input {
      font-size: 18px;
      padding: 6px;
    }
  }

  span {
    font-size: 22px;
    color: black;
    align-self: flex-start;
    margin: 10px;
  }

  input,
  textarea {
    font-size: 20px;
    color: black;
    border: 2px solid #d33936;
    border-radius: 4px;
    padding: 8px;
  }

  textarea {
    max-width: 260px;
    width: 100%;
    max-height: 300px;
    height: 100%;
  }
`;
