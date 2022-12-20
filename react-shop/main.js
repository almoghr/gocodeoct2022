


//here you do all the pieces

const Nav = () => {
  return (
    <nav>shalom</nav>
  )
}

const Products = () => {
  return(
    <div>products</div>
  )
}


const Main = () => {
  return (
    <div>
      <Nav />
      <Products />
    </div>
  )
}


ReactDOM.render(<Main />, document.getElementById('app'))