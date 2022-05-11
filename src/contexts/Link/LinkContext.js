import { createContext, useReducer } from 'react';
import LinkReducer from '../reducers/LinkReducer';

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const initialState = {
    links: [],
  };

  const [state, dispatch] = useReducer(LinkReducer, initialState);
  return (
    <LinkContext.Provider
      value={{
        state: state,
        dispatch,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContext;
