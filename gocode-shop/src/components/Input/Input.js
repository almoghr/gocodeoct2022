import React, { useState } from "react";

const Input = () => {
    const [formObj, setFormObj] = useState({})
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");
//   const [hobby, setHobby] = useState("");

  const submitForm = () => {
    // console.log({name, email, age, hobby})
    console.log(formObj)
  }
  return (
    <div>
      <input
        placeholder="enter your name"
        // onChange={(e) => setName(e.target.value)}
        onChange={(e) => setFormObj({...formObj, name:e.target.value} )}
      />
      <input
        type="number"
        placeholder="enter your age"
        // onChange={(e) => setAge(e.target.value)}
        onChange={(e) => setFormObj({...formObj, age: e.target.value})}

      />
      <input
        placeholder="enter your email"
        // onChange={(e) => setEmail(e.target.value)}
        onChange={(e) => setFormObj({...formObj, email: e.target.value})}

      />
      <input
        placeholder="enter your favorite hobby"
        // onChange={(e) => setHobby(e.target.value)}
        onChange={(e) => setFormObj({...formObj, hobby: e.target.value})}

      />
      <button onClick={submitForm}>submit</button>
      {/* {name && <p>something was written</p>} */}
    </div>
  );
};

export default Input;
