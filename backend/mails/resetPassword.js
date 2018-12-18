const mail = require("../config/email");
const path = require("path");
mail.send({
  template: path.join(__dirname, "../views", "resetPassword"),
  message: {
    to: "elon@spacex.com"
  },
  locals: {
    name: "Elon"
  }
});
