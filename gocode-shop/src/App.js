import './App.css';
import Button from './components/Button/Button'
import Counter from './components/Counter/Counter';
import Input from './components/Input/Input';
import ListOfNumbers from './components/ListOfNumbers/ListOfNumbers';
import {arr, arr2} from './data/data'


function App() {
  return (
    <div className="App">
      {/* <Button /> */}
      <Counter />
      {/* <Input /> */}
      {/* <ListOfNumbers/> */}
    </div>
  );
}

export default App;
