import { model, Schema } from "mongoose";

const activitySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Activity = model("Activity", activitySchema);

export { Activity };
