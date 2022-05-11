export const isLinkValid = (link) => {
  var expression =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  var regex = new RegExp(expression);

  if (link.match(regex)) {
    return true;
  } else return false;
};

export const isUnique = (links, newLink) => {
  let counter = 0;

  links.map((link) => {
    if (link.title === newLink.title) {
      counter++;
    }
  });

  if (counter !== 0) return false;
  else return true;
};
