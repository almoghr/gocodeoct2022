import React, {useState} from "react";
import Clock from "./components/Clock/Clock";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import ListOfNumbers from "./components/ListOfNumbers/ListOfNumbers";
import { Link, useNavigate } from "react-router-dom";
// import { Button, Drawer } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const navigate = useNavigate();
  return (
    <div>
      hello
        <Button onClick={() => setCartOpen(true)}>open drawer</Button>
        <Drawer anchor={"left"} open={cartOpen} onClose={() => setCartOpen(false)}>
          <div>shalom from the drawer</div>
        </Drawer>

      <Button />
      <button
        onClick={() => {
          navigate("about/about2");
        }}
      >
        go to about 2
      </button>
      <Link to={"about/about2"}>go to about 2</Link>
    </div>
  );
};

export default App;
