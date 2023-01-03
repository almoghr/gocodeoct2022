import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <Link to={"/"}>HOME </Link>
        <Link to={"about"}>ABOUT </Link>
        <Link to={"about/about2"}>ABOUT2 </Link>
        <Link to={"termsOfAgreement"}>TERMS </Link>
        <Link to={"yesSir"}>YES SIR </Link>
    </div>
  )
}

export default Header