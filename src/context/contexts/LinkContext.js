import { createContext, useReducer } from 'react';
import LinkReducer from '../reducers/LinkReducer';

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const initialState = {
    links: [
      // {
      //   title: 'Stack Overflow',
      //   url: 'https://stackoverflow.com',
      //   points: 0,
      // },
      // {
      //   title: 'Medium',
      //   url: 'https://medium.com',
      //   points: 2,
      // },
      // {
      //   title: 'Stack Overflow',
      //   url: 'https://stackoverflow.com',
      //   points: 4,
      // },
    ],
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
