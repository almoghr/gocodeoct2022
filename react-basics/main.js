// console.log('hello')

// const ButtonElement = React.createElement('button', {onClick: () => alert("hi")}, 'clickMe')

// ReactDOM.render(ButtonElement, document.getElementById("app"))

// //בהצלחה:)
const inputsArr = [
  {
    fieldName: "first name",
    placeholder: "enter your first name",
    customClass: "input",
    type: undefined,
  },
  {
    fieldName: "first name",
    placeholder: "enter your first name",
    customClass: "input",
    type: undefined,
  },
  {
    fieldName: "first name",
    placeholder: "enter your first name",
    customClass: "input",
    type: undefined,
  },
  {
    fieldName: "first name",
    placeholder: "enter your first name",
    customClass: "input",
    type: "password",
  },
  {
    fieldName: "first name",
    placeholder: "enter your first name",
    customClass: "input",
    type: "number",
  },
];


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
  const arr = [1, 1, 2, 3, 4, 5, 6];
  const listItems = arr.map((num, index) => <li key={index}>{num}</li>);
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      {listItems}
      {arr.map((num, index) => (
        <li key={index + 25}>{num}</li>
      ))}
    </ul>
  );
};

const Input = ({ fieldName, type = "text", customClass, placeholder }) => {
  console.log({ fieldName, type, customClass, placeholder });
  return (
    <div className="inputContainer">
      <label className="inputLabel">{fieldName}</label>
      <input type={type} className={customClass} placeholder={placeholder} />
    </div>
  );
};

const Container = ({inputsArr}) => {
  return (
    <div>
      <ButtonElement />
      <NumberList />
      {inputsArr.map((input) => (
        <Input
          fieldName={input.fieldName}
          placeholder={input.placeholder}
          customClass={input.customClass}
          type={input.type}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<Container inputsArr={inputsArr}/>, document.getElementById("app"));
