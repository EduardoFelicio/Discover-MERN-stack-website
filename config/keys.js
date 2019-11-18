const secret = process.env.SECRET || "secret";
const mongoURI = process.env.MONGODB_URI;
module.exports = {
  mongoURI: mongoURI,
  secretOrKey: secret
};
