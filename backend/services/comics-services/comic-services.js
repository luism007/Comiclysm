const comics = require("../../db-access/comics-db-static");

const getComics = () => {
  try {
    const comicList = comics;
    return comicList;
  } catch (e) {
    console.log("There was an error!");
  }
};

module.exports = {
  getComics,
};
