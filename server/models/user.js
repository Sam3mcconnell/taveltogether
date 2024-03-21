import { model, Schema } from "mongoose";

const userSchema = new Schema({
  itineraries: {
    type: [Schema.Types.ObjectId],
    ref: "Itinerary",
  },
  favourites: {
    type: [Schema.Types.ObjectId],
    ref: "Itinerary",
  },
});

const User = model("User", userSchema);

export { User };
