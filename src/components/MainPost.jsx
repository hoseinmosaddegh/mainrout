//ONE POST RETURNS
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useParams, Navigate } from "react-router-dom"; //only use in child component--redirect
import Numbers from "./Numbers";
function MainPost() {
  const [postes, setpostes] = useState(Numbers);
  let { userId } = useParams();
  const item = postes.some((post) => post.id == userId); //test id exist or no
  console.log(!item);
  if (!item) {
    return <Navigate to="/" />; //redirect
  }
  const post = postes.find((post) => post.id === Number(userId));

  return (
    <div>
      <Link to="/">home</Link>
      <hr />
      {post ? post.title : "پستی یافت نشد"}
    </div>
  );

  // return (
  //   <div>
  //     ((!item) ? ({postes.filter((post) => post.id === Number(userId)).title}) :
  //     ( <Navigate to="/" />
  //     ))
  //   </div>
  // );
}

export default MainPost;
