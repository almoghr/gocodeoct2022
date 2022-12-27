import React,{useState} from 'react';

const arr = [1,2,3,4,5,6,7,8,9,10];

const ListOfNumbers = () => {
    const [listOfNumbers, setListOfNumbers] = useState(arr)

    const filterBiggerThanThree = () => {
      const tempArr = arr.filter((number) =>  number > 3)
      setListOfNumbers(tempArr)
      //option 2
      // setListOfNumbers(arr.filter((number) =>  number > 3))
    }

    const popANumber = () => {
      const tempArr = [...listOfNumbers]
      tempArr.pop()
      setListOfNumbers(tempArr)
    }

    const removeCertainNumber = (num) => {
      setListOfNumbers(arr.filter((number) => number !== num))
    }

    const filterLessThanFour = () => {
      setListOfNumbers(listOfNumbers.filter((number) => number > 4))
    }    
  return (
    <div>
    <ul>
        {listOfNumbers.map((number, index) => <li key={index}>{number}</li>)}
    </ul>
    <button onClick={filterBiggerThanThree}>only bigger than 3</button>
    <button onClick={() => setListOfNumbers(arr)}>ALL NUMBERS</button>
    <button onClick={popANumber}>pop it</button>
    <button onClick={() => removeCertainNumber(5)}>remove 5</button>
    <button onClick={filterLessThanFour}>filter</button>

    </div>
  )
}

export default ListOfNumbers