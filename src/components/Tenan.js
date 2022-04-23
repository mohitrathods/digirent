import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import home from "../images/home.png";
import firebase from "@firebase/app-compat";

const Tenant = () => {
  /** switch case for switching collections */

  /** uploading to db*/
  const [input, setInput] = useState("");
  //setting up data to be sent //push whatever data in input to this array
  const [name, setName] = useState([
    // "message", "another message"
  ]);
  // console.log(input); // see what typing
  // console.log(name);

  /**SEND DATA function*/
  const sendData = (event) => {
    //all the logic to send dat-a to firebase
    event.preventDefault(); // dont refresh page after enter

    //sending data to firebase
    db.collection("demo").add({
      name: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //...name : get whatever in the current name(array)
    //set names whatever it was + input
    setName([...name, input]);
    //clean input after
    setInput("");
  };

  return (
    <MainDivision>
      {/* TESTING messages addedto input is  shown there */}
      {/* {name.map((names) => (
        <p>{names}</p>
      ))} */}
      <Topdiv>
        <Left>
          <span className="spanone">
            Discover a new way to Rent your products
          </span>

          <span className="spantwo">Rent your dreams</span>

          <span>
            Rent your products on Digirent. Add Product name, category and
            mentioned required things in the form. to get your products live on
            our website
          </span>

          <p>
            Earn some extra passive income by adding just products in our
            website
          </p>
          <p>Fill the form if you want to rent your products</p>
        </Left>
        <Right>
          <img src={home} alt="img" />
        </Right>
      </Topdiv>

      <BottomdivForm>
        {/*  */}
        {/* I HAVE EVERYTHING I WANNA GET FROM USER */}
        {/*  */}

        <Inputdiv>
          {/* <p>Tenant info.</p> */}
          <span>Enter your name</span>
          <input
            placeholder="Your name"
            type="text"
            required
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </Inputdiv>
        <Inputdiv>
          <span>Enter your Email</span>
          <input placeholder="Your Email" type="text" required />
        </Inputdiv>
        <Inputdiv>
          <span>Your Phone number</span>
          <input placeholder="Phone number" type="text" required />
        </Inputdiv>
        <Inputdiv>
          <span>Your Whatsapp number</span>
          <input placeholder="Whatsapp numner" type="text" required />
        </Inputdiv>
        <Inputdiv>
          <span>Write Message</span>
          <textarea required placeholder="Write message" />
        </Inputdiv>

        <Inputdiv>
          {/* <p>Product info.</p> */}
          <span>Product name</span>
          <input placeholder="product name" type="text" required />
        </Inputdiv>
        <Inputdiv>
          <span>Product description</span>
          <textarea placeholder="description" required />
        </Inputdiv>
        <Inputdiv>
          <span>Product price</span>
          <input placeholder="price/hours,days" type="text" required />
        </Inputdiv>

        <Inputdiv>select option for selecting category</Inputdiv>

        <Inputdiv>
          <span>add your product images</span>
          <input placeholder="product category" type="file" multiple required />
        </Inputdiv>

        <Button>
          <form>
            {/* input and button wrapped in form */}
            <button onClick={sendData}>Submit</button>
          </form>
        </Button>
      </BottomdivForm>
    </MainDivision>
  );
};

export default Tenant;

const MainDivision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Topdiv = styled.div`
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

    :last-child {
      font-size: 26px;
      font-weight: 500;
      color: #d93936;
    }
  }

  span {
    margin: 4px;
    padding: 4px;

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

/**BOTTOM DIVISION STYLES */
const BottomdivForm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin: 10px;
  padding: 10px;
  background-color: white;

  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(181, 181, 181, 0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(181, 181, 181, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(181, 181, 181, 0.75);

  width: fit-content;

  p {
    color: #d33936;
    font-size: 22px;
    padding: 10px;
    margin: 10px;
    line-height: 0;
    box-shadow: 0px 0px 6px 0px rgba(217, 217, 217, 0.75);
    -webkit-box-shadow: 0px 0px 6px 0px rgba(217, 217, 217, 0.75);
    -moz-box-shadow: 0px 0px 6px 0px rgba(217, 217, 217, 0.75);
    border-radius: 8px;
    width: fit-content;
    align-self: center;
  }
`;

const Inputdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 120px;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 0px 7px 0px rgba(102, 102, 102, 0.75);
  -webkit-box-shadow: 0px 0px 7px 0px rgba(102, 102, 102, 0.75);
  -moz-box-shadow: 0px 0px 7px 0px rgba(102, 102, 102, 0.75);

  :hover {
    box-shadow: 0px 0px 4px 0px rgba(102, 102, 102, 0.75);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(102, 102, 102, 0.75);
    -moz-box-shadow: 0px 0px 4px 0px rgba(102, 102, 102, 0.75);
  }

  max-width: 700px;
  @media screen and (max-width: 470px) {
    max-width: 300px;
  }

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
    max-width: 240px;
    width: 100%;
    max-height: 300px;
    height: 100%;
  }
`;

const Button = styled.div`
  button {
    padding: 8px;
    margin: 8px;
    color: black;
    font-size: 22px;
    background-color: white;
    border: 2px solid transparent;
    border-radius: 6px;
    transition: 0.2s;
    cursor: pointer;
    box-shadow: 0px 0px 6px 0px rgba(158, 158, 158, 0.75);
    -webkit-box-shadow: 0px 0px 6px 0px rgba(158, 158, 158, 0.75);
    -moz-box-shadow: 0px 0px 6px 0px rgba(158, 158, 158, 0.75);

    :hover {
      border: 2px solid black;
      transition: 0.2s;
      box-shadow: none;
    }
  }
`;
