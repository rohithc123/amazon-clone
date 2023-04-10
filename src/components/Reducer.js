export const GetBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

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

    case "REMOVE-FROM-BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default Reducer;
