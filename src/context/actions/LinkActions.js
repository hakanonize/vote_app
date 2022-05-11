export const getLinksFromStorage = (dispatch) => {
  const links = JSON.parse(localStorage.getItem('links'));

  links && dispatch({ type: 'FETCH_LINKS', payload: links });
};

export const addLinkToStorage = (dispatch, payload) => {
  dispatch({ type: 'ADD_LINK', payload });
};
