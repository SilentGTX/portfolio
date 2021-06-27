import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ btnLink, btnText, id }) {
  return (
    <div className="button-conteiner">
      <Link className="button" id={id} to={btnLink}>
        {btnText}
      </Link>
    </div>
  );
}
