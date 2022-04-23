import React, { useState } from "react";
import { storage, db } from "../firebase";

const Upload = () => {
  const [caption, setCaption] = useState("");
  //empty state for caption
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    // uploading a image
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    //listenevent
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progressbar
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 1000
        );

        setProgress(progress);
      },
      (error) => {
        //error function
        console.log("error");
        alert(error.message);
      },

      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post inside db
            db.collection("posts").add({
              //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              // username  : username,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    // caption inpt, file piker, post button
    <div>
      <input
        placeholder="enter something"
        type="text"
        //grabs latest updated text and store into setState
        onChange={(event) => setCaption(event.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}> upload </button>
    </div>
  );
};

export default Upload;
