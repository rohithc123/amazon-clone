export const GetBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


export const initialState = {
  basket: [],
};

//adding all the prices

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
