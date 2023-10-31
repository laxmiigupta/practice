import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UseReducer() {
  let [count, setCount] = useState(0);

  function reducer(state, action) {
    console.log("state", state);
    console.log("action", action);
    if (action.type === "INC-1") {
      return { number: state.number - 1 };
    } else if (action.type === "INC-2") {
      return { number: state.number + 2 };
    } else if (action.type === "INC-BY-VAL") {
      return { number: state.number + action.payload };
    } else if (action.type === "DEC-BY-VAL") {
      return { number: state.number - action.payload };
    } else if (action.type === "MUL-BY-VAL") {
        return { number: state.number * action.payload };
      } else {
      return state;
    }
  }

  let [value, dispatch] = useReducer(reducer, { number: 0 });
  console.log("value", value);

  const [inputValue, setInputValue] = useState(""); // State to store input value

  const handleAddClick = () => {
    const inputValueAsNumber = parseInt(inputValue);
    dispatch({ type: "INC-BY-VAL", payload: inputValueAsNumber });
  };

  const handleSubtractClick = () => {
    const inputValueAsNumber = parseInt(inputValue);
    dispatch({ type: "DEC-BY-VAL", payload: inputValueAsNumber });
  };
  const handleMultiplyClick = () => {
    const inputValueAsNumber = parseInt(inputValue);
    dispatch({ type: "MUL-BY-VAL", payload: inputValueAsNumber });
  };

  return (
    <>
      <h1>UseReducer</h1>
      <h1>Amount is {value.number}</h1>

      <Button
        color="danger"
        className="m-3"
        onClick={() => dispatch({ type: "INC-1" })}
      >
        INC-1
      </Button>
      <Button
        color="danger"
        className="m-3"
        onClick={() => dispatch({ type: "INC-2" })}
      >
        INC-2
      </Button>
      <input
        type="number"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <Button color="success" className="m-3" onClick={handleAddClick}>
        Add
      </Button>
      <Button color="danger" className="m-3" onClick={handleSubtractClick}>
        Subtract
      </Button>
      <Button color="danger" className="m-3" onClick={handleMultiplyClick}>
        Multiplication
      </Button>
    </>
  );
}
