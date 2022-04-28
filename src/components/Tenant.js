import React, { useState } from "react";
import styled from "styled-components";
import { db, storage } from "../firebase";
import home from "../images/home.png";
import firebase from "@firebase/app-compat";
import "./tenant.css";
import Footer from "./Footer";
import ImageUpload from "../firebase_upload/ImageUpload";
import "./tenant.css";

const Tenant = () => {
  /** if else for switching collections */
  // {
  //   if (document.getElementById("clothes")) {
  //     console.log("hello");
  //   } else if (document.getElementById("video")) {
  //     console.log("video");
  //   }
  // }

  /** upload images */
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // console.log("image: ", image);

  /** selected option for db */
  const [selected, setSelected] = useState("");

  /* SETTING user inputs */
  // input name
  const [input, setInput] = useState("");
  const [name, setName] = useState([]);

  // input email
  const [inputemail, setInputemail] = useState("");
  const [email, setEmail] = useState([]);

  // input phone no
  const [inputphone, setInputphone] = useState("");
  const [phone, setPhone] = useState([]);

  // whatsapp
  const [inputwhatsapp, setInputwhatsapp] = useState("");
  const [whatsApp, setWhatsApp] = useState([]);

  // message
  const [inputmessage, setInputmessage] = useState("");
  const [message, setMessage] = useState([]);

  // pname
  const [inputpname, setInputpname] = useState("");
  const [pname, setPname] = useState([]);

  // pdes
  const [inputpdes, setInputpdes] = useState("");
  const [pdes, setPdes] = useState([]);

  // pprice
  const [inputpprice, setInputpprice] = useState("");
  const [pprice, setPprice] = useState([]);

  // pimages
  const [inputpimages, setInputpimages] = useState("");
  const [pimages, setPimages] = useState([]);

  //send data
  const sendData = (event) => {
    event.preventDefault(); // dont refresh page after enter
    // const uploadImg = storage.ref(`images/${pimages.name}`).put(pimages);

    // uploadImg.on(() => {
    //   storage.ref("images").child(pimages.name).getDownloadURL();
    // });

    // {
    //   //clothes
    //   if ({ selected } == "Clothes") {
    //     db.collection("clothes").add({
    //       name: input,
    //       email: inputemail,
    //       phone: inputphone,
    //       whatsApp: inputwhatsapp,
    //       message: inputmessage,
    //       pname: inputpname,
    //       pdes: inputpdes,
    //       pprice: inputpprice,
    //       pimages: inputpimages,
    //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     });
    //   }
    //   // video
    //   else if ({ selected } == "Videoshooting") {
    //     db.collection("video").add({
    //       name: input,
    //       email: inputemail,
    //       phone: inputphone,
    //       whatsApp: inputwhatsapp,
    //       message: inputmessage,
    //       pname: inputpname,
    //       pdes: inputpdes,
    //       pprice: inputpprice,
    //       pimages: inputpimages,
    //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     });
    //   }

    //   setName([...name, input]);
    //   setEmail([...email, inputemail]);
    //   setPhone([...phone, inputphone]);
    //   setWhatsApp([...whatsApp, inputwhatsapp]);
    //   setMessage([...message, inputmessage]);
    //   setPname([...pname, inputpname]);
    //   setPdes([...pdes, inputpdes]);
    //   setPprice([...pprice, inputpprice]);
    //   setPimages([...pimages, inputpimages]);
    // }

    switch (selected) {
      case "Clothes":
        db.collection("clothes").add({
          name: input,
          email: inputemail,
          phone: inputphone,
          whatsApp: inputwhatsapp,
          message: inputmessage,
          pname: inputpname,
          pdes: inputpdes,
          pprice: inputpprice,
          pimages: inputpimages,
          image: url,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        break;

      case "Video Shooting":
        db.collection("video").add({
          name: input,
          email: inputemail,
          phone: inputphone,
          whatsApp: inputwhatsapp,
          message: inputmessage,
          pname: inputpname,
          pdes: inputpdes,
          pprice: inputpprice,
          pimages: inputpimages,
          image: url,

          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        break;

      case "Books":
        db.collection("books").add({
          name: input,
          email: inputemail,
          phone: inputphone,
          whatsApp: inputwhatsapp,
          message: inputmessage,
          pname: inputpname,
          pdes: inputpdes,
          pprice: inputpprice,
          pimages: inputpimages,
          image: url,

          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        break;

      case "Power Tools":
        db.collection("powertools").add({
          name: input,
          email: inputemail,
          phone: inputphone,
          whatsApp: inputwhatsapp,
          message: inputmessage,
          pname: inputpname,
          pdes: inputpdes,
          pprice: inputpprice,
          pimages: inputpimages,
          image: url,

          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        break;

      case "Vehicles":
        db.collection("vehicles").add({
          name: input,
          email: inputemail,
          phone: inputphone,
          whatsApp: inputwhatsapp,
          message: inputmessage,
          pname: inputpname,
          pdes: inputpdes,
          pprice: inputpprice,
          pimages: inputpimages,
          image: url,

          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        break;

      default:
        break;
    }

    // db.collection("clothes").add({
    //   name: input,
    //   email: inputemail,
    //   phone: inputphone,
    //   whatsApp: inputwhatsapp,
    //   message: inputmessage,
    //   pname: inputpname,
    //   pdes: inputpdes,
    //   pprice: inputpprice,
    //   pimages: inputpimages,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });

    setName([...name, input]);
    setEmail([...email, inputemail]);
    setPhone([...phone, inputphone]);
    setWhatsApp([...whatsApp, inputwhatsapp]);
    setMessage([...message, inputmessage]);
    setPname([...pname, inputpname]);
    setPdes([...pdes, inputpdes]);
    setPprice([...pprice, inputpprice]);
    setPimages([...pimages, inputpimages]);
    setUrl([...image, url]);

    //clean input aft/b/deproject-8dc4f.appspot.cer
    setInput("");
    setInputemail("");
    setInputphone("");
    setInputwhatsapp("");
    setInputmessage("");
    setInputpname("");
    setInputpdes("");
    setInputpprice("");
    setInputpimages("");
    setImage(null);
  };

  function clearAll() {
    alert("data submitted successfully");
    setInput("");
    setInputemail("");
    setInputphone("");
    setInputwhatsapp("");
    setInputmessage("");
    setInputpname("");
    setInputpdes("");
    setInputpprice("");
    setInputpimages("");
    setImage(null);
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
        setImage(null);
      }
    );
  };

  return (
    <MainDivision>
      {/* TESTING messages addedto input is  shown there */}
      {/* {data.map((names) => (
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
        {/* <form> */}
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
          <input
            placeholder="Your Email"
            type="text"
            required
            value={inputemail}
            onChange={(event) => setInputemail(event.target.value)}
          />
        </Inputdiv>
        <Inputdiv>
          <span>Your Phone number</span>
          <input
            placeholder="Phone number"
            type="text"
            required
            value={inputphone}
            onChange={(event) => setInputphone(event.target.value)}
          />
        </Inputdiv>
        <Inputdiv>
          <span>Your Whatsapp number</span>
          <input
            placeholder="Whatsapp numner"
            type="text"
            required
            value={inputwhatsapp}
            onChange={(event) => setInputwhatsapp(event.target.value)}
          />
        </Inputdiv>
        <Inputdiv>
          <span>Write Message</span>
          <textarea
            value={inputmessage}
            onChange={(event) => setInputmessage(event.target.value)}
            required
            placeholder="Write message"
          />
        </Inputdiv>

        <Inputdiv>
          {/* <p>Product info.</p> */}
          <span>Product name</span>
          <input
            placeholder="product name"
            type="text"
            required
            value={inputpname}
            onChange={(event) => setInputpname(event.target.value)}
          />
        </Inputdiv>
        <Inputdiv>
          <span>Product description</span>
          <textarea
            placeholder="description"
            required
            value={inputpdes}
            onChange={(event) => setInputpdes(event.target.value)}
          />
        </Inputdiv>
        <Inputdiv>
          <span>Product price</span>
          <input
            placeholder="price/hours,days"
            type="text"
            required
            value={inputpprice}
            onChange={(event) => setInputpprice(event.target.value)}
          />
        </Inputdiv>
        <Inputdiv>
          <select
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
          >
            <option>Select</option>
            <option value="Clothes">Clothes</option>
            <option value="Video Shooting">Videoshooting equipments</option>
            <option value="Books">Books</option>
            <option value="Power Tools">Power tools</option>
            <option value="Vehicles">Vehicles</option>
          </select>
          <span>Selected category is</span>
          <p>{selected}</p>
        </Inputdiv>

        <Inputdiv>
          <span>add your product images</span>
          {/* <input
            placeholder="product category"
            type="file"
            required
            value={inputpimages}
            onChange={(event) => setInputpimages(event.target.value)}
          /> */}
          {/* <ImageUpload /> */}

          {/* <div> */}
          <progress value={progress} max="100" />
          {/* <br />
            <br /> */}
          <input type="file" onChange={handleChange} />
          <span>please click on upload after selecting a image</span>
          <button onClick={handleUpload}>Upload Image</button>
          {/* <br />
            {url}
            <br />
            <img src={url} alt="firebase-image" />
          </div> */}
        </Inputdiv>

        <Button>
          <button onClick={sendData}>
            <button onClick={clearAll}>Submit</button>
          </button>
        </Button>
        {/* </form> */}
      </BottomdivForm>
      <Footer />
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
  flex-direction: column;

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
  /* width: fit-content; */

  height: 120px;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 0px 7px 0px rgba(102, 102, 102, 0.75);
  -webkit-box-shadow: 0px 0px 7px 0px rgba(102, 102, 102, 0.75);
  -moz-box-shadow: 0px 0px 7px 0px rgba(102, 102, 102, 0.75);

  :nth-child(10) {
    height: 220px;
  }

  button {
    margin: 10px;
    padding: 6px;
    font-size: 22px;
    width: fit-content;
    cursor: pointer;
    background-color: white;
    box-shadow: 2px 2px 6px 2px rgba(255, 107, 107, 0.75);
    -webkit-box-shadow: 2px 2px 6px 2px rgba(255, 107, 107, 0.75);
    -moz-box-shadow: 2px 2px 6px 2px rgba(255, 107, 107, 0.75);
    border: none;
    border-radius: 8px;
    transition: 0.2s;

    :hover {
      transition: 0.2s;
      box-shadow: 1px 1px 2px 1px rgba(255, 183, 183, 0.75);
      -webkit-box-shadow: 1px 1px 2px 1px rgba(255, 183, 183, 0.75);
      -moz-box-shadow: 1px 1px 2px 1px rgba(255, 183, 183, 0.75);
    }
  }

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
  button :first-child {
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
