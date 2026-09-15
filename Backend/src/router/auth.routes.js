const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// authRouter created⬇️
const authRouter = express.Router();

/**
 *
 * @routes POST /api/auth/register
 * @description register a new user
 * @access public
 */
authRouter.post('/register', authController.registerUserController);

/**
 *
 * @routes POST /api/auth/login
 * @description login a new user
 * @access public
 */
authRouter.post('/login', authController.loginUserController);

/**
 *
 * @routes GET /api/auth/logout
 * @description logout current login user
 * @access public
 */
authRouter.get('/logout', authController.logoutUserController);

/**
 *
 * @routes GET /api/auth/get-me
 * @description get the current logged in user details
 * @access private
 */
authRouter.get('/get-me', authMiddleware.authUser, authController.getMeController);


module.exports = authRouter;
