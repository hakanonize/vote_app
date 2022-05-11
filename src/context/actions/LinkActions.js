import { isUnique } from '../utils/validator';

export const getLinksFromStorage = (dispatch) => {
  const links = JSON.parse(localStorage.getItem('links'));

  links && dispatch({ type: 'FETCH_LINKS', payload: links });
};

export const addLinkToStorage = (dispatch, payload, links) => {
  const unique = isUnique(links, payload);

  if (!unique) return false;
  dispatch({ type: 'ADD_LINK', payload });
  return true;
};

export const voteLink = (dispatch, link, isUp) => {
  if (isUp) {
    dispatch({ type: 'VOTE_UP', payload: link });
  } else {
    dispatch({ type: 'VOTE_DOWN', payload: link });
  }
};
