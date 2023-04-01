import React, {createContext, useContext, useReducer} from "react";
import { CounterReducer } from "./CounterReducer";
import { CLEAR } from "./CounterActions";
import { INCREASE } from "./CounterActions";
import { DECREASE } from "./CounterActions";

const CounterContext = createContext();

const Counter = () => {
  const initialState = {
    counter: 0,
  };

  const [counterState, dispatch] = useReducer(CounterReducer, initialState);

  const increase = () => {
    dispatch({
      type: INCREASE,
    });
  };

  const decrease = () => {
    dispatch({
      type: DECREASE,
    });
  };

  const clear = () => {
    dispatch({
      type: CLEAR,
    });
  };

  return (
    <div>
      <CounterContext.Provider value={counterState.counter}>
         Wiadomość z komponentu counter:
        <br />
        <CounterPrinter />
      </CounterContext.Provider>
       
        <button onClick={increase}>Zwiększ o jeden</button>
        <br />
        <button onClick={decrease}>Zmniejsz o jeden</button>
        <br />
        <button onClick={clear}>Zeruj</button>
        

    </div>
  )
};

const CounterPrinter = () => {
  return (
    <div>
      Wiadomość z komponentu CounterPrinter
      <br />
      <CounterShow />
    </div>
  )
}

const CounterShow = () => {
  const value = useContext(CounterContext);
  return (
    <div>Wiadomość z komponentu CounterPrinter
      <br />
       Wartość licznika: {value}.
       </div>
  )
  
   
  
}

export default Counter;
