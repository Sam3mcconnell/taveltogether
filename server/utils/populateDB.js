import { Itinerary } from "../models/itinerary.js";
import { Activity } from "../models/activity.js";
import { User } from "../models/user.js";

const activitiesData = [
  {
    name: "Visit Museum",
    description: "Explore the historical artifacts at the local museum.",
  },
  {
    name: "Hiking Trip",
    description: "Enjoy a scenic hike through the mountains.",
  },
  {
    name: "Beach Day",
    description: "Relax on the sandy shores and soak up the sun.",
  },
];

async function populateActivities() {
  try {
    await Activity.deleteMany();
    const activities = await Activity.create(activitiesData);
    return activities;
  } catch (error) {
    console.error("Error populating activities:", error);
  }
}

async function populateItineraries(dbActivities) {
  const itinerariesData = [
    {
      activities: [dbActivities[0]._id, dbActivities[1]._id],
      description:"Active trip with seeing the 2 best tourist attractions",
      title:"Great active 1 day trip in Hong Kong"
    },
    {
      activities: [dbActivities[2]._id],
      description:"Relax and just chill with a pina colada in your hand.",
      title:"1 Day relaxing getaway from the world trip in HK"
    },
  ];
  try {
    await Itinerary.deleteMany();
    const itineraries = await Itinerary.create(itinerariesData);
    return itineraries;
  } catch (error) {
    console.error("Error populating itineraries:", error);
  }
}

async function populateUsers(dbItin) {
  const usersData = [
    {
      itineraries: [dbItin[0]._id],
      favourites: [],
    },
    {
      itineraries: [dbItin[1]._id],
      favourites: [],
    },
  ];
  try {
    await User.deleteMany();
    const users = await User.create(usersData);
  } catch (error) {
    console.error("Error populating users:", error);
  }
}

//Removes everything from db and creates basic test data!!!
export async function populateEverything() {
  const DBactivities = await populateActivities();
  const DBitin = await populateItineraries(DBactivities);
  await populateUsers(DBitin);
  console.log("Deleted everything from db and created small test data")
}
