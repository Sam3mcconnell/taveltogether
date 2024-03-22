import { model, Schema } from "mongoose";

const itinerarySchema = new Schema({
  activities: {
    type: [Schema.Types.ObjectId],
    ref: "Activity",
  },
  description:{
    type: String,
    require: true
  },
  title:{
    type: String,
    require: true
  }
});

const Itinerary = model("Itinerary", itinerarySchema);

export { Itinerary };
