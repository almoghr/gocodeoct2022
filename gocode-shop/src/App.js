import React from 'react'
import Button from "./components/Button/Button";
import Clock from "./components/Clock/Clock";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import ListOfNumbers from "./components/ListOfNumbers/ListOfNumbers";
import { Link, useNavigate } from 'react-router-dom';
const App = () => {
    const navigate = useNavigate()
  return (
    <div> 
        <Button />
        <button onClick={() => {navigate("about/about2")}}>go to about 2</button>
        <Link to={"about/about2"}>go to about 2</Link>
    </div>
  )
}

export default App