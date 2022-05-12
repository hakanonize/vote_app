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
    case 'VOTE_UP':
      const index = state.links.findIndex((link) => {
        return link.title === action.payload.title;
      });
      const temp = state.links;
      temp[index] = { ...action.payload, points: action.payload.points + 1 };
      var jsonArray = JSON.stringify(temp);
      localStorage.setItem('links', jsonArray);
      return {
        links: temp,
      };
    case 'VOTE_DOWN':
      const index2 = state.links.findIndex((link) => {
        return link.title === action.payload.title;
      });
      const temp2 = state.links;
      temp2[index2] = { ...action.payload, points: action.payload.points - 1 };
      var jsonArray2 = JSON.stringify(temp2);
      localStorage.setItem('links', jsonArray2);
      return {
        links: temp2,
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
