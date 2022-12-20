// console.log('hello')

// const ButtonElement = React.createElement('button', {onClick: () => alert("hi")}, 'clickMe')

// ReactDOM.render(ButtonElement, document.getElementById("app"))

// //בהצלחה:)

const ButtonElement = () => {
  return (
    <div>
      <button onClick={() => alert("hi")}>click me!</button>
      <label>name:</label>
      <input placeholder="enter you name" />
      <span>:)</span>
    </div>
  );
};

const NumberList = () => {
  const arr = [1, 1, 2, 3, 4, 5];
  const listItems = arr.map((num, index) => <li key={index}>{num}</li>);
  console.log(listItems)
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      {listItems}
      {arr.map((num,index) => <li key={index+25}>{num}</li>)}
    </ul>
  );
};
const Container = () => {
  return (
    <div>
      <ButtonElement />
      <NumberList />
    </div>
  );
};
ReactDOM.render(<Container />, document.getElementById("app"));
