import React from "react";
import { Link } from "react-router-dom"; //alternative tag a in DOM
function Contact() {
  return (
    <div>
      Contact
      <Link to="/aboutus">About</Link> //only use routers path relative
      <Link to="/">Home</Link>
    </div>
  );
}

export default Contact;
