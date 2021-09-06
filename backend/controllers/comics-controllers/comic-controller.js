const comicServices = require("../../services");

const getComics = (req, res, next) => {
  try {
    const comics = comicServices.comicServices.getComics();
    console.log("Comics Received", comics);
    res.status(200).send(comics);
    next();
  } catch (e) {
    console.log("There was an error in creating the controller!", e);
  }
};

module.exports = {
  getComics,
};
