import Joi from 'joi';

export default {

  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().min(6).required(),
    }
  },

  // POST /api/auth/register
  register: {
    body: {
      username: Joi.string().required(),
      email: Joi.string().email(),
      password: Joi.string().min(6).required(),
    }
  },

  //PUT /api/auth/changePass
  changePass: {
    body: {
      currentPass: Joi.string().min(6).required(),
      newPass: Joi.string().min(6).required(),
      retypePass: Joi.string().min(6).required(),
    }
  }
};
