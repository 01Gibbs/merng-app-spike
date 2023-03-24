const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  id: ID,
  username: String,
  password: String,
  email: String,
  user_geolocation: [
    {
      latitude: Float,
      longitude: Float,
    },
  ],
  created_at: Timestamp,
});

module.exports = model("User", userSchema);
