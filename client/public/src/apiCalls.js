/**
 *
 * @param {Number} lowLimit
 * @param {Number} highLimit
 * @returns {Response}
 */
export async function fetchCards(lowLimit, highLimit) {
  return await fetch(
    `http://localhost:3000/api/getCards?lLimit=${lowLimit}&hLimit=${highLimit}`
  )
    .then((response) => response)
    .catch((error) => {
      console.log("Error fetching cards:", error);
      return new Response("Unknown params or something else happened").status(200);
    });
}

export async function fetchCardDetails(id) {
  return await fetch(`http://localhost:3000/api/getCardDetails?id=${id}`)
    .then((response) => response)
    .catch((error) => {
      console.log("Error fetching card details: ", error);
      return new Response("Unknown ID").status(200);
    });
}

export async function postItineraryData(itineraryData) {
  try {
      const response = await fetch('http://localhost:3000/api/postItinerary', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(itineraryData)
      });

      if (!response.ok) {
          throw new Error('Failed to post itinerary data');
      }

      const responseData = await response.json();
      console.log('Response from server:', responseData);
  } catch (error) {
      console.error('Error posting itinerary data:', error.message);
  }
}