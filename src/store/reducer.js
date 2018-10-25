const initialState = {
  age: 21,
  history: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  // if (action.type === "AGE_UP") {
  //   newState.age++;
  // }

  // if (action.type === "AGE_DOWN") {
  //   newState.age--;
  // }

  switch (action.type) {
    case "AGE_UP":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({ age: state.age + action.value })
      };

    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({ age: state.age - action.value })
      };
  }
  return newState;
};

export default reducer;
