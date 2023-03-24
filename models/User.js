const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  geolocation: Object,
  locationByPostCode: String,
  created_at: String,
  updated_at: String,
});

module.exports = model("User", userSchema);
