import React, { useState } from "react";
import { Link } from "react-router-dom"; //alternative for tag a in SPA

import Numbers from "./Numbers";

function Posts() {
  const [postes, setpostes] = useState(Numbers);

  return (
    <>
      {postes.map((post) => (
        <p key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </p>
      ))}
    </>
  );
}

export default Posts;
