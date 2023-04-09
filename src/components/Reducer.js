export const initialState = {
  basket: [],
};

const Reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "ADD-TO-BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      
      
    default:
        return state;  
  }
};



export default Reducer;
