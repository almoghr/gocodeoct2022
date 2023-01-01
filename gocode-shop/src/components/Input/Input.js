import React, { useState, useRef } from "react";

const Input = () => {
  const inputEl = useRef(null);
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);

    const [formObj, setFormObj] = useState({})
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");
//   const [hobby, setHobby] = useState("");

  const submitForm = () => {
    // console.log({name, email, age, hobby})
    console.log(formObj)
  }

  const handleClick = () => {
    inputEl.current.focus()
    inputEl.current.style.background = 'red'
  }
  const handleClick2 = () => {
    inputEl2.current.focus()
    inputEl2.current.style.background = 'red'
  }
  const handleClick3 = () => {
    inputEl3.current.focus()
    inputEl3.current.style.background = 'red'
  }
  const handleClick4 = () => {
    inputEl4.current.focus()
    inputEl4.current.style.background = 'red'
  }

  return (
    <div>
      <input
        ref={inputEl}
        placeholder="enter your name"
        // onChange={(e) => setName(e.target.value)}
        onChange={(e) => setFormObj({...formObj, name:e.target.value} )}
      />
      <input
      ref={inputEl2}
        type="number"
        placeholder="enter your age"
        // onChange={(e) => setAge(e.target.value)}
        onChange={(e) => setFormObj({...formObj, age: e.target.value})}

      />
      <input
      ref={inputEl3}
        placeholder="enter your email"
        // onChange={(e) => setEmail(e.target.value)}
        onChange={(e) => setFormObj({...formObj, email: e.target.value})}

      />
      <input
      ref={inputEl4}
        placeholder="enter your favorite hobby"
        // onChange={(e) => setHobby(e.target.value)}
        onChange={(e) => setFormObj({...formObj, hobby: e.target.value})}

      />
      <button onClick={submitForm}>submit</button>
      {/* {name && <p>something was written</p>} */}

      <div style={{height:'100px', width:'300px', border:'4px solid blue'}}></div>
      <div style={{height:'100px', width:'300px', border:'4px solid blue'}}></div>
      <div style={{height:'100px', width:'300px', border:'4px solid blue'}}></div>
      <div style={{height:'100px', width:'300px', border:'4px solid blue'}}></div>
      <button onClick={handleClick}>click me for focus</button>
      <button onClick={handleClick2}>click me for focus</button>
      <button onClick={handleClick3}>click me for focus</button>
      <button onClick={handleClick4}>click me for focus</button>
    </div>
  );
};

export default Input;
