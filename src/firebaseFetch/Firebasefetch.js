import Render from "./Render";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const Firebasefetch = (post) => {
  const [posts, setPosts] = useState([
    // {
    //   pname: "mohit",
    // },
    // {
    //   pname: "rathod",
    // },
  ]);

  useEffect(() => {
    db.collection("demo").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Render pname={post.pname} pdescription={post.pdescription} />
      ))}

      {posts.map((post) => post.pname)}
    </div>
  );
};

export default Firebasefetch;

/**write things to be rendered from database */
// const [posts, setPosts] = useState([
//   /**pulling info from db and capture here in empty states */
//   {
//     pname: "name",
//     pimage: "url",
//   },
//   // {
//   //   pname : "another name";
//   //   pimage : "another url"
//   // }
// ]);

// /**runs a piece of code at specific condition
//  * code will run once when app component loads or page refreshes
//  */
// useEffect(
//   () => {
//     //code
//     //snapshot : every single time changes happen(new doc updated, added, deleted to db, fire the code)
//     db.collection("demo").onSnapshot((snapshot) => {
//       //setposts from the snapshot go to docs(collection), and map through every single one
//       //get each doc
//       setPosts(
//         snapshot.docs.map((doc) => {
//           console.log(doc.id, " => ", doc.data());
//           doc.data(); // data means all the properties like pname, pimage, pprice...
//         })
//       );
//     });
//   },
//   /**also run everysingle time posts changes */
//   []
// );
