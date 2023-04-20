import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  address: null,
  connect: false,
  web3: null,
  balance: {
    "ether": 0,
    "usdt": 0
  },
  usdt_contract: null,
  refresh: false
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

  const updateUsdtContract = (_usdt_contract) => {
    dispatch({ type: "UPDATE_USDT_CONTRACT", payload: _usdt_contract})
  }

  const updateRefresh = (_refresh) => {
    dispatch({ type: "UPDATE_REFRESH", payload: _refresh})
  }

  return (
    <GlobalContext.Provider
      value={{
        address: state.address,
        connect: state.connect,
        web3: state.web3,
        balance: state.balance,
        usdt_contract: state.usdt_contract,
        refresh: state.refresh,
        updateWeb3,
        updateConnect,
        updateAddress,
        updateBalance,
        updateUsdtContract,
        updateRefresh: updateRefresh
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
