export default (state, action) => {
  switch (action.type) {
    case "UPDATE_WEB3":
      return {
        ...state,
        web3: action.payload,
      };
    case "UPDATE_CONNECT":
      return {
        ...state,
        connect: action.payload,
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "UPDATE_READING_CLIENT":
      return {
        ...state,
        readingClient: action.payload,
      };
    case "UPDATE_SENDING_CLIENT":
      return {
        ...state,
        sendingClient: action.payload,
      };
  }
};
