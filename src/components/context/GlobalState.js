import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  address: null,
  connect: false,
  web3: null,
  balance: [0, 0]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const updateWeb3 = (_web3) => {
    dispatch({ type: "UPDATE_WEB3", payload: _web3 });
  };

  const updateConnect = (_connect) => {
    dispatch({ type: "UPDATE_CONNECT", payload: _connect });
  };

  const updateBalance = (_balance) => {
    dispatch({ type: "UPDATE_BALANCE", payload: _balance})
  }

  const updateAddress = (_address) => {
    dispatch({ type: "UPDATE_ADDRESS", payload: _address });
  };

  return (
    <GlobalContext.Provider
      value={{
        address: state.address,
        connect: state.connect,
        web3: state.web3,
        balance: state.balance,
        updateWeb3,
        updateConnect,
        updateAddress,
        updateBalance
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
