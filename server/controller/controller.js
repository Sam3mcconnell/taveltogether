import { Activity } from "../models/activity.js";
import { Itinerary } from "../models/itinerary.js";
/**
 * Returns "cards" (itinerarys) name needs to be changed in the future
 * @param {Request} req - Request where you can specify search criterias etc in the future
 * @param {Response} res - Responses the itinerarys which have been specified.
 */
export async function getCardDetails(req, res) {
  //Here we put the db fetching etc
  //TODO: vielä pitää tehdä tälle et query paramilla haetaan tietyllä idllä jne jne tää on 
  //atm vaan kopio siitä alkuperäsestä!!!
  try {
    const searchID = req.query.id;
    if(searchID === undefined){
      res.status(400).json("Bad request, ID not defined.")
    }

    const itineraryToFind = await Itinerary.findById(searchID)
    if(itineraryToFind === undefined || itineraryToFind === null){
      res.status(400).json("Bad request. ID does not exist.")
    }
      const tempItinerary = {
        _id: itineraryToFind._id,
        title: itineraryToFind.title,
        description: itineraryToFind.description,
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

export async function getCards(req, res) {
  //Here we put the db fetching etc
  try {
    const params = req.query;
    var all_itineraries;
    if (params.hLimit !== undefined && params.lLimit !== undefined) {
      all_itineraries = await Itinerary.find({}).skip(params.lLimit).limit(params.hLimit);
    } else {
      all_itineraries = await Itinerary.find({});
    }

    res.status(200).json(all_itineraries);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
