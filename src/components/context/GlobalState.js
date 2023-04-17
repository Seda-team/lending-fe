import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  readingClient: null,
  sendingClient: null,
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

  const updateSendingClient = (_sendingClient) => {
    dispatch({ type: "UPDATE_SENDING_CLIENT", payload: _sendingClient });
  };

  const updateReadingClient = (_readingClient) => {
    dispatch({ type: "UPDATE_READING_CLIENT", payload: _readingClient });
  };

  return (
    <GlobalContext.Provider
      value={{
        readingClient: state.readingClient,
        sendingClient: state.sendingClient,
        address: state.address,
        connect: state.connect,
        web3: state.web3,
        balance: state.balance,
        updateWeb3,
        updateConnect,
        updateAddress,
        updateReadingClient,
        updateSendingClient,
        updateBalance
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
