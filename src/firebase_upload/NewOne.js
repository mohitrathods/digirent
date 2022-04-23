import React, { useState } from "react";
import firebaseApp, { storage, db } from "../firebase";

const NewOne = () => {
  const onChange = (e) => {
    const file = e.target.files[0];
    const storageRef = firebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Uploaded a file");
    });
  };

  return <input type="file" onChange={onChange} />;
};

export default NewOne;
