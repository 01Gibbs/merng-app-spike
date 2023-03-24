const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
});
// ,
//   user_geolocation: [
//     {
//       latitude: Number,
//       longitude: Number,
//     },
//   ],
//   created_at: Date,
// });

module.exports = model("User", userSchema);
