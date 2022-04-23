import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tiger from "../images/tiger.jpg";
import { Link } from "react-router-dom";
import { db, storage } from "../firebase";
import Footer from "../components/Footer";
import ImageUpload from "../firebase_upload/ImageUpload";
import Tenant from "../components/Tenant";

const Clothes = () => {
  /**write things to be rendered from database */
  const [posts, setPosts] = useState([
    /**pulling info from db and capture here in empty array */
  ]);

  /**runs a piece of code at specific condition
   * code will run once when app component loads or page refreshes
   */
  useEffect(() => {
    db.collection("clothes")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <Maindiv>
      <Top>
        <span>Category : Clothes</span>
      </Top>

      <Bottom>
        {/* this may be logic for mapping each card */}
        {posts.map((post) => (
          <Eachcard>
            <Imagess>
              <Images>
                {/* <img src={tiger} alt="image" /> */}
                {/* <img src={tiger} alt="image" />
              <img src={tiger} alt="image" />
              <img src={tiger} alt="image" /> */}
                {/* {posts.map((post) => post.pimages)} */}
                {/* images */}
                {/* <img src={post.pimages} /> */}
                <img src={post.image} alt="firebase-image" />
              </Images>
            </Imagess>

            <BottomofImages>
              <Pname>
                <span>Name</span>
                <span>
                  {/* {posts.map((post) => post.pname)} */}
                  {post.pname}
                </span>
                {/* name */}
              </Pname>
              <Pdescription>
                <span>Description </span>
                <span>{post.pdes}</span>
                {/* description */}
              </Pdescription>
              <Pprice>
                <span>Price </span>
                <span> {post.pprice}</span>
                {/* price */}
              </Pprice>

              <Buttons>
                <a href={`https://wa.me/+91${post.whatsApp}`} target="_blank">
                  WhatsApp
                </a>

                <a
                  href={`tel:${post.phone}`}
                  onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                >
                  Call now
                </a>
              </Buttons>
            </BottomofImages>
          </Eachcard>
        ))}
        {/* <Eachcard>
          <Images>
            <img src={tiger} alt="image" />
            <img src={tiger} alt="image" />
            <img src={tiger} alt="image" />
            <img src={tiger} alt="image" />
            <img src={tiger} alt="image" />
          </Images>

          <Pname>
            <span>Name </span>
            <span>Rich dad Poor dad</span>
          </Pname>
          <Pdescription>
            <span>Description </span>
            <span>
              Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and
              Sharon Lechter. It advocates the importance of financial literacy,
              financial independence and building wealth through investing in
              assets, real estate investing, starting and owning businesses, as
              well as increasing one's financial intelligence.
            </span>
          </Pdescription>
          <Pprice>
            <span>Price </span>
            <span> ₹100/month</span>
          </Pprice>

          <Buttons>
            <button>Add to Cart</button>
            <Link to="/checkout">Checkout</Link>
          </Buttons>
        </Eachcard>
      */}
      </Bottom>
      <Footer />
      {/* <ImageUpload /> */}
    </Maindiv>
  );
};

export default Clothes;

const Imagess = styled.div`
  display: flex;
`;

const BottomofImages = styled.div`
  display: flex;
  flex-direction: column;
`;

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;

  align-self: center;
  margin: 20px;

  span {
    color: #d93936;
    font-size: 40px;
    font-weight: 500;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  margin: 12px;
  background-color: white;

  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);

  border-radius: 16px;
`;

const Eachcard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  /* flex-wrap: wrap; */
  width: 100%;

  @media screen and (max-width: 740px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
  }

  margin: 12px;
  box-shadow: 0px 0px 6px 1px rgba(222, 222, 222, 0.75);
  -webkit-box-shadow: 0px 0px 6px 1px rgba(222, 222, 222, 0.75);
  -moz-box-shadow: 0px 0px 6px 1px rgba(222, 222, 222, 0.75);
  /* border: 2px solid black; */

  border-radius: 6px;
  /* 
  max-width: 300px;
  min-width: 250px;
  width: 100%;
  min-height: 500px;
  max-height: 500px;
  height: 100%; */
`;

const Images = styled.div`
  display: flex;

  /* padding: 6px; */
  margin: 10px;

  /* max-width: 220px; */
  /* min-width: 250px; */
  width: 100%;
  /* min-height: 500px; */
  /* height: 100%; */

  /* width: 210px; */
  /* overflow-x: scroll; */
  background-color: #dddddd;
  border-radius: 8px;

  /* width */
  /* ::-webkit-scrollbar {
    width: 6px;
    height: 8px;
  } */

  /* Track */
  /* ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 6px;
  } */

  /* Handle */
  /* ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 6px;
  } */

  /* Handle on hover */
  /* ::-webkit-scrollbar-thumb:hover {
    background: black;
  } */

  img {
    object-fit: cover;
    /* margin: 6px; */
    width: 200px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 1px rgba(222, 222, 222, 0.75);
    -webkit-box-shadow: 0px 0px 6px 1px rgba(222, 222, 222, 0.75);
    -moz-box-shadow: 0px 0px 6px 1px rgba(222, 222, 222, 0.75);
  }
`;

const Pname = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-self: flex-start;
  text-align: left;

  span {
    font-size: 20px;

    :first-child {
      color: #d93936;
      font-weight: 500;
    }

    :last-child {
      color: black;
      ::before {
        content: ": ";
      }
    }
  }
`;

const Pdescription = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-self: flex-start;
  margin: 4px;

  span {
    font-size: 16px;
    color: black;
    margin: 4px;

    :first-child {
      color: #d33639;
      font-weight: 500;
      font-size: 18px;
    }

    :last-child {
      color: black;
      ::before {
        content: ": ";
      }
    }
  }
`;

const Pprice = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  align-self: flex-start;

  span {
    font-size: 20px;

    :last-child {
      color: black;
      ::before {
        content: ": ";
      }
    }

    :first-child {
      color: #d93936;
      font-weight: 500;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  button,
  a {
    font-weight: 500;
    font-size: 18px;
    margin: 10px;
    padding: 8px;
    background-color: white;
    color: black;
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 16px;
    cursor: pointer;

    :first-child {
      color: green;
      :hover {
        color: black;
      }
    }

    box-shadow: 0px 0px 18px 0px rgba(217, 217, 217, 0.75);
    -webkit-box-shadow: 0px 0px 18px 0px rgba(217, 217, 217, 0.75);
    -moz-box-shadow: 0px 0px 18px 0px rgba(217, 217, 217, 0.75);
    transition: 0.2s;

    :hover {
      color: #d33639;
      transition: 0.2s;
      box-shadow: 0px 0px 10px 0px rgba(217, 217, 217, 0.75);
      -webkit-box-shadow: 0px 0px 10px 0px rgba(217, 217, 217, 0.75);
      -moz-box-shadow: 0px 0px 10px 0px rgba(217, 217, 217, 0.75);
    }
  }
`;
