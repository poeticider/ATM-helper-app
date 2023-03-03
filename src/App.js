// Importing the useSelector and useDispatch functions to select the required
// slices of state.
import { useSelector, useDispatch } from "react-redux";
// Importing the action creators we’ve implemented in our counter reducer.
import { incrementByAmount, decrementByAmount, balanceWithInterest, balanceWithCharges } from "./store/counter";
import { useState } from "react";
import './App.css';

//skeleton of code used taken from the task 51pdf

function App() {
  const [userInputD, setUserInputD] = useState(0);
  const [userInputW, setUserInputW] = useState(0);

  // The useSelector function allows us to find the needed slices of state we
  // require. The useDispatch function will dispatch all the necessary actions to
  // the reducer to enable us to modify the state.
  const count = useSelector((state) => state.counter.value);
  // Initiating the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();

  const handleSubmitDeposit = (event) => {
    event.preventDefault();
    dispatch(incrementByAmount(Number(userInputD)));
    setUserInputD(0);
    };

  const handleSubmitWithdraw = (event) => {
    event.preventDefault();
    dispatch(decrementByAmount(Number(userInputW)));
    setUserInputW(0)
    };

  return (
    <div>
      <div className="App">
        <h1>ATM helper</h1>
        {/* Displaying the state or count variable we have initiated earlier
        using the useSeletor function*/}
        <h1>Balance: {count}</h1>
      </div>

      <form className="Form" onClick={handleSubmitDeposit}>
        <label>
        Deposit  
        <input
        type="text"
        name="valueDepost"
        onChange={(e) => setUserInputD(e.target.value)}
        value={userInputD}
        />
        </label>
        <button type="submit">Submit</button>
      </form>

      <form className="Form" onClick={handleSubmitWithdraw}>
        <label>
        Withdraw  
        <input
        type="text"
        name="valueWithdraw"
        onChange={(e) => setUserInputW(e.target.value)}
        value={userInputW}
        />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      <div className="Buttons">
        {/* Each time any of the buttons below are clicked upon, the state will
        increment or decrease depending on the button.*/}
        <button onClick={() => dispatch(balanceWithInterest())}>Add Interest</button>
        <button onClick={() => dispatch(balanceWithCharges())}>Add Charges</button>
      </div>
      

    </div>
  );
}

export default App;
