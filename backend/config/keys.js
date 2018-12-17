const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;
const dbHost = process.env.DB_HOST;
const dbPORT = process.env.DB_PORT;

module.exports = {
  mongoURI: `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPORT}/${dbDatabase}`,
  secretOrKey: `${process.env.APP_KEY}`
};
