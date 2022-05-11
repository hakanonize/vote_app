const LinkReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_LINKS':
      return {
        ...state,
        links: action.payload,
      };
    case 'ADD_LINK':
      var jsonArray = JSON.stringify([action.payload, ...state.links]);
      localStorage.setItem('links', jsonArray);
      return {
        links: [action.payload, ...state.links],
      };
    case 'CLEAR_LINKS':
      return {
        links: [],
      };
    default:
      return state;
  }
};

export default LinkReducer;
