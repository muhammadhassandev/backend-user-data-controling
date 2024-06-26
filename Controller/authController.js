const { query } = require("express");
const joi = require("joi");
const loginSchema = joi.object().keys({
  userName: joi.string().email().required(),
  password: joi.string().min(6).max(18).required(),
});

module.exports = {
  CreateUser:async (req, res) => {
    try{
      const validate =await Createuserschema.validateAsync(req,query);
      const user =userService.CreateUser(validate);
      if (user.error)
        {
          return res.send



        }
      return res
    res.send({
      message: "login request",
    });
  },

  logout: (req, res) => {
    res.send({
      message: "logout request",
    });
  },
};
