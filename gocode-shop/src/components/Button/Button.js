import React, { useState } from "react";
import "./Button.css";

const Button = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  const toggleIsAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      <button onClick={toggleIsAdmin}>am i admin?</button>
      <button disabled={isAdmin} onClick={() => alert("hello")}>
        click me!
      </button>
      {isAdmin && (
        <button onClick={() => console.log("hey there mr admin")}>
          click me only if you are admin
        </button>
      )}

    </div>
  );
};

export default Button;
