export const compareFunc = (a, b) => {
  if (a.points < b.points) {
    return -1;
  }
  if (a.points > b.points) {
    return 1;
  }
  return a.lastModify < b.lastModify ? -1 : 1;
};

export const sortFunc = (isAsc, links) => {
  const sortedList = isAsc
    ? links.sort(compareFunc)
    : links.sort(compareFunc).reverse();

  return sortedList;
};
