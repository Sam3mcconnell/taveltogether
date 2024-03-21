import { model, Schema } from "mongoose";

const itinerarySchema = new Schema({
  activities: {
    type: [Schema.Types.ObjectId],
    ref: "Activity",
  },
});

const Itinerary = model("Itinerary", itinerarySchema);

export { Itinerary };
