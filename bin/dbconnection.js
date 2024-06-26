require("dotenv").config();

const { Sequelize } = require("sequelize");

const.sequelize=new sequelize(
    {
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        username: process.env.DB_USERNAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,

    }
)

Sequelize
.Authenticate()
then(() => {
    console.log("successful");
})
.catch((error)=> {
    console.log("error found",error.message);
});

module.exports = sequelize ;