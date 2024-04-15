import { Activity } from "../models/activity.js";
import { Itinerary } from "../models/itinerary.js";
import { User } from "../models/user.js";
/**
 * Returns "cards" (itinerarys) name needs to be changed in the future
 * @param {Request} req - Request where you can specify search criterias etc in the future
 * @param {Response} res - Responses the itinerarys which have been specified.
 */
export async function getCardDetails(req, res) {
  //Here we put the db fetching etc
  try {
    const searchID = req.query.id;
    if (searchID === undefined) {
      res.status(400).json("Bad request, ID not defined.");
    }

    const itineraryToFind = await Itinerary.findById(searchID);
    if (itineraryToFind === undefined || itineraryToFind === null) {
      res.status(400).json("Bad request. ID does not exist.");
    }
    const tempItinerary = {
      _id: itineraryToFind._id,
      title: itineraryToFind.title,
      city: itineraryToFind.city,
    };
    const itineraryActivities = await Activity.find({
      _id: { $in: itineraryToFind.activities },
    });
    tempItinerary.activities = itineraryActivities;
    res.status(200).json(tempItinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function getItineraries(req, res) {
  try {
    const searchUID = req.query.uid;
    if (searchUID === undefined) {
      res.status(400).json("Bad request, uid not found from query.");
    }
    const user = await User.findOne({uid:searchUID})
    if(user === undefined){
      res.status(400).json("Bad request, uid not found from db.");
    }
    const userItineraries = [];

    for (const itineraryID of user.itineraries){
      var tempItinerary = await Itinerary.findById(itineraryID)
      const tempActivity = await Activity.find({_id: { $in: tempItinerary.activities },});
      tempItinerary.activities = JSON.stringify(tempActivity)
      console.log(tempActivity)
      userItineraries.push(tempItinerary);
    }
    res.status(200).json(userItineraries)
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function getCards(req, res) {
  //Here we put the db fetching etc
  try {
    const params = req.query;
    var all_itineraries;
    if (params.hLimit !== undefined && params.lLimit !== undefined) {
      all_itineraries = await Itinerary.find({})
        .skip(params.lLimit)
        .limit(params.hLimit);
    } else {
      all_itineraries = await Itinerary.find({});
    }

    res.status(200).json(all_itineraries);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function postNewUser(req, res) {
  try {
    const newUserUid = req.body.uid;
    if (newUserUid === undefined || newUserUid === null) {
      console.log(error);
      res.status(500).json(error);
      return;
    }
    const newUser = new User({
      uid: newUserUid,
      itineraries: [],
      favourites: [],
    });
    await newUser.save();
    res.status(200).json("User created succesfully!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
export async function postItinerary(req, res) {
  try {
    // Check if request has a body and if it's a JSON object
    if (req.body && Object.keys(req.body).length > 0) {
      // Parse the request body if it's JSON
      const { userInfo, city, title, activities, backgroundColor } = req.body;
      var user = await User.findOne({ uid: userInfo });
      if (user === undefined || user === null) {
        res.status(500).json("User not found");
      }
      // Create new activity documents
      const activityIds = [];
      for (const activity of activities) {
        const newActivity = new Activity({
          name: activity.name,
          description: activity.description,
          location: activity.location,
        });
        await newActivity.save();
        activityIds.push(newActivity._id);
      }

      // Create new itinerary document
      const newItinerary = new Itinerary({
        title: title,
        city: city,
        backgroundColor: backgroundColor,
        activities: activityIds,
      });
      await newItinerary.save();

      user.itineraries.push(newItinerary._id);
      await user.save();
      res.status(200).json("Itinerary created succesfully!");
    }
  } catch (error) {
    // If an error occurs, return an error response
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to parse request body or create documents" });
  }
}
