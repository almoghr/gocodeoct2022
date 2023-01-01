import "./App.css";
import Button from "./components/Button/Button";
import Clock from "./components/Clock/Clock";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";
import ListOfNumbers from "./components/ListOfNumbers/ListOfNumbers";
import { arr } from "./data/data";
import { useClock } from "./useClock";
import MyContext from "./MyContext";
import Comp1 from "./components/Drill/Comp1";

function App() {

  const clock = useClock();
  return (
    <MyContext.Provider>
      <div className="App">
        {/* <Button /> */}
        {/* <Counter /> */}
        {/* <Input /> */}
        {/* <ListOfNumbers /> */}
        {/* <Clock /> */}
        {/* <h1 style={ { color: "blue" } }>{clock}</h1> */}
        {/* <Comp1  data={arr} /> */}
        {/* <Comp1 /> */}
      </div>
    </MyContext.Provider>
  );
}

export default App;
