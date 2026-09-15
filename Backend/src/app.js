const express = require("express");
const authRouter = require('./router/auth.routes');
const cookieParser = require("cookie-parser");

// Server created⬇️
const app = express();

// Middleware to ready req.body data⬇️
app.use(express.json());

// Middleware to ready cookies data⬇️
app.use(cookieParser());

// authRouter preFix⬇️
app.use('/api/auth',authRouter);

module.exports = app;

