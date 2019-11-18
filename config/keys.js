const secret = process.env.SECRET || "secret";
const mongoURI = process.env.MONGOLAB_URI;
module.exports = {
  mongoURI: mongoURI,
  secretOrKey: secret
};
