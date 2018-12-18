const Email = require("email-templates");
const path = require("path");
const config = require("../config/keys");
module.exports = email = new Email({
  message: {
    from: "niftylettuce@gmail.com"
  },
  // uncomment below to send emails in development/test env:
  // send: true,
  transport: config.mailKeys
});
