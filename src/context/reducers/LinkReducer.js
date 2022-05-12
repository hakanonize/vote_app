import { act } from 'react-dom/test-utils';
import { sortFunc } from '../../utils/calc';

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
        ...state,
        links: [action.payload, ...state.links],
      };
    case 'VOTE_UP':
      const index = state.links.findIndex((link) => {
        return link.title === action.payload.title;
      });
      const temp = state.links;
      temp[index] = {
        ...action.payload,
        points: action.payload.points + 1,
        lastModify: Date.parse(new Date()),
      };
      var jsonArray = JSON.stringify(temp);
      localStorage.setItem('links', jsonArray);
      return {
        ...state,
        links: temp,
      };
    case 'VOTE_DOWN':
      const index2 = state.links.findIndex((link) => {
        return link.title === action.payload.title;
      });
      const temp2 = state.links;
      temp2[index2] = {
        ...action.payload,
        points: action.payload.points - 1,
        lastModify: Date.parse(new Date()),
      };
      var jsonArray2 = JSON.stringify(temp2);
      localStorage.setItem('links', jsonArray2);
      return {
        ...state,
        links: temp2,
      };

    case 'DELETE_LINK':
      const deleteTemp = state.links;

      const filteredLinks = deleteTemp.filter((link) => {
        return link.title !== action.payload;
      });

      var jsonArray3 = JSON.stringify(filteredLinks);
      localStorage.setItem('links', jsonArray3);
      return {
        ...state,
        links: filteredLinks,
      };

    case 'SORT_LINKS_ASC':
      const ascSortedList = sortFunc(true, state.links);
      return {
        ...state,
        links: ascSortedList,
      };
    case 'SORT_LINKS_DESC':
      const sortedList = sortFunc(false, state.links);
      return { ...state, links: sortedList };
    case 'TOAST_ON':
      return {
        ...state,
        toast: {
          active: true,
          text: action.payload.text,
          type: action.payload.type,
        },
      };
    case 'TOAST_OFF':
      return {
        ...state,
        toast: {
          active: false,
          text: 'MDN Added',
          type: 'success',
        },
      };
    case 'MODAL_ON':
      return {
        ...state,
        deleteModal: {
          active: true,
          name: action.payload,
        },
      };
    case 'MODAL_OFF':
      return {
        ...state,
        deleteModal: {
          active: false,
        },
      };
    default:
      return state;
  }
};

export default LinkReducer;
