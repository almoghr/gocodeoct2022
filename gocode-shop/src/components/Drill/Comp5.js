import React from 'react'
import { useContext } from "react";
import MyContext from "../../MyContext";

const Comp5 = () => {
    
    const {products, setProducts} = useContext(MyContext);

    console.log(data)
  return (
    <div>Comp5</div>
  )
}

export default Comp5