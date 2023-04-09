import React,{createContext , useContext,useReducer} from "react";
import Reducer from "./Reducer";
//prepares the datalayer
export const StateContext = createContext();



//pull information from the data layer

export const useStateValue = () => useContext(StateContext);
// wrap our app and Provide the data layer


const StateProvider = ({Reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(Reducer,initialState)}>
    {children}
  </StateContext.Provider>
);

export default StateProvider;