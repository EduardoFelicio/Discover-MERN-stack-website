const secret = process.env.SECRET || "secret";
module.exports = {
  mongoURI: 'mongodb+srv://eduardo:felicio98@cluster0-6kqzl.gcp.mongodb.net/test?retryWrites=true&w=majority',
  secretOrKey: secret
};
