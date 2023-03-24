const { model, Schema } = require("mongoose");

const geolocationSchema = new Schema({
  id: ID,
  name: String,
  geolocation: [
    {
      latitude: Float,
      longitude: Float,
    },
  ],
  description: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  created_at: Timestamp,
  updated_at: Timestamp,
});

module.exports = model("Geolocation", geolocationSchema);
