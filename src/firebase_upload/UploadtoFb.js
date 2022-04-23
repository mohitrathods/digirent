import React, { useState } from "react";
import { storage, db } from "../firebase";

const UploadtoFb = () => {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  //   const handleFireBaseUpload = (e) => {
  //     e.preventDefault();
  //     console.log("start of upload");
  //     // async magic goes here...
  //   };

  if (imageAsFile === "") {
    console.error(`not an image, the image file is a ${typeof imageAsFile}`);
  }

  const uploadTask = storage
    .ref(`/images/${imageAsFile.name}`)
    .put(imageAsFile);

  //initiates the firebase side uploading
  uploadTask.on(
    "state_changed",
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot);
    },
    (err) => {
      //catches the errors
      console.log(err);
    },
    () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage
        .ref("images")
        .child(imageAsFile.name)
        .getDownloadURL()
        .then((fireBaseUrl) => {
          setImageAsUrl((prevObject) => ({
            ...prevObject,
            imgUrl: fireBaseUrl,
          }));
        });
    }
  );

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
          });
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleFireBaseUpload}>
        <input
          // allows you to reach into your file directory and upload image to the browser
          type="file"
          onChange={handleImageAsFile}
        />
        {/* <img src={imageAsUrl.imgUrl} alt="image tag" /> */}

        <button>upload to fb</button>
      </form>
    </div>
  );
};

export default UploadtoFb;
