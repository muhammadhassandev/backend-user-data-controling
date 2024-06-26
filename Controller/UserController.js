deleteUser :async (req ,res) => {
    try{
        const validate = await deleteUserSchema.validateAysnc (req.query);
        const deleteUser = await UserService.deleteUser (validate.userId);

        if (deleteUser.error) {
            return res.send ({
                error : deleteUser.error,
            });
        }

        return res.send(
            {
                
            }
        )

    }
}