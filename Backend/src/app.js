const express = require("express");
const authRouter = require('./router/auth.routes');
const cookieParser = require("cookie-parser");
const cors = require("cors");


// Server created⬇️
const app = express();

// To deal with CORS policy error⬇️
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

// Middleware to ready req.body data⬇️
app.use(express.json());

// Middleware to ready cookies data⬇️
app.use(cookieParser());

// authRouter preFix⬇️
app.use('/api/auth', authRouter);

module.exports = app;

