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
  user_id: ID,
  created_at: Timestamp,
  updated_at: Timestamp,
});

module.exports = model("Geolocation", geolocationSchema);
