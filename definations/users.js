const {Model ,Datatype } = require {"sequelize"};
const sequelize = require("../../bin/dbConnection");

class users extends Model{}

users.init({
    userid:{
        primarykey :true,
        type: DataTypes.String(255),

    },
    userName : {
        unique : true ,
        allowNull :false,
        type
    }
    
} ,{});
