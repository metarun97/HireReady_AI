const mongoose = require("mongoose");

// tokenBlacklistSchema created⬇️
const tokenBlacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: [true, "token is required to be added in blacklist"],
  }
}, {
  timestamps: true
})

// tokenBlacklistModel created⬇️
const tokenBlacklistModel = mongoose.model("blacklistTokens", tokenBlacklistSchema);

module.exports = tokenBlacklistModel;
