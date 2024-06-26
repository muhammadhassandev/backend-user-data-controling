const { response } = require("express")
const { where } = require("sequelize")

deleteUser:async (userId) => {
    try {
        const deleteUser =await Models.user.destroy (
            {
                where : {userId : userId}
            }
        )
        return {
            response :deleteUser ,
        }
    }


}