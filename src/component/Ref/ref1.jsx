import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UseReducer() {
  let [count, setCount] = useState(0);

  function reducer(state, action) {
    console.log("state", state);
    console.log("action", action);
    if (action.type === "INC-1") {
      return { number: state.number + 1 };
    } else if (action.type === "INC-2") {
      return { number: state.number + 2 };
    } else if (action.type === "INC-BY-VAL") {
      return { number: state.number + action.payload };
    } else {
      return state;
    }
  }

  let [value, dispatch] = useReducer(reducer, { number: 999 });
  console.log("value", value);

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
        onChange={event => {
          const inputValue = parseInt(event.target.value);
          if (!isNaN(inputValue)) { // Check if it's a valid number
            dispatch({ type: "INC-BY-VAL", payload: inputValue });
          }
        }}
      />
      <
    </>
  );
}
