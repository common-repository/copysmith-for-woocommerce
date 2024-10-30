import React from 'react';

const actions = Object.freeze({
  CATEGORY_SELECT: 'CATEGORY_SELECT',
  TAG_SELECT: 'TAG_SELECT',
  STATUS_SELECT: 'STATUS_SELECT',
  SEARCH_TERM: 'SEARCH_TERM',
  CLEAR: 'CLEAR',
  UPDATE_PAGE: 'UPDATE_PAGE',
});

const initialState = {
  category: '',
  tag: '',
  search: '',
  status: '',
  page: 0,
};

const ProductContext = React.createContext();

const productReducer = (state, action) => {
  switch(action.type) {
    case actions.CATEGORY_SELECT:
      return {...state, category: action.payload};
    case actions.TAG_SELECT:
      return {...state, tag: action.payload};
    case actions.STATUS_SELECT:
      return {...state, status: action.payload};
    case actions.SEARCH_TERM:
      return {...state, search: action.payload};
    case actions.UPDATE_PAGE:
      return {...state, page: action.payload};
    case actions.CLEAR:
      return initialState;
    default: {
      throw new Error(`Product Context Reducer: Unhandled action type: ${action.type}`);
    }
  };
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(productReducer, initialState);

  const value = {state, dispatch};

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
};

const useProductContext = () => {
  const context = React.useContext(ProductContext);

  if(context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }

  return context;
};

export {
  ProductProvider,
  useProductContext,
  actions,
}