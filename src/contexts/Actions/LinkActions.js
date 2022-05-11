export const getLinksFromLocalStorage = () => {
  const links = localStorage.getItem('links');
  return links;
};
