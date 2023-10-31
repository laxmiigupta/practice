import React, { useReducer, useState } from "react";



function reducer(state = "", action) {
  switch (action.type) {
    case "ON_CHANGE": {
      const newValue = action.payload;
      return newValue;
    }
    default: {
      return state;
    }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, "");

  return (
    <div className="App">
      <input
        value={state}
        onChange={event =>
          dispatch({ type: "ON_CHANGE", payload: event.target.value })
        }
      />
    </div>
  );
}