import {fetchCardDetails} from "../src/apiCalls.js"
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");

const cardDataResponse = await fetchCardDetails(id);
if (cardDataResponse.status !== 200) {
  console.log("error fetching card details");
  //Maybe an icon or something here too?
} else {
  const cardDetailsJson = await cardDataResponse.json();
  // document.getElementById("json-container").innerHTML = JSON.stringify(cardDetailsJson);
  document.getElementById("card-title").innerHTML = cardDetailsJson.title;
  document.getElementById("card-city").innerHTML = cardDetailsJson.city
  
  for (var i = 0; i < cardDetailsJson.activities.length; i++) {
    const newActivityDiv = document.createElement('div');
    newActivityDiv.setAttribute('class', 'activity-container')

    const newActivityName = document.createElement('h3');
    newActivityName.textContent = cardDetailsJson.activities[i].name;
    newActivityName.setAttribute('class', 'activity-name');
    newActivityDiv.appendChild(newActivityName);
    newActivityDiv.appendChild(document.createElement('br'));

    const newActivityLocation = document.createElement('text');
    newActivityLocation.textContent = cardDetailsJson.activities[i].location;
    newActivityLocation.setAttribute('class', 'activity-location');
    newActivityDiv.appendChild(newActivityLocation);
    newActivityDiv.appendChild(document.createElement('br'));

    const newActivityDesc = document.createElement('text');
    newActivityDesc.textContent = cardDetailsJson.activities[i].description;
    newActivityDesc.setAttribute('class', 'activity-desc');
    newActivityDiv.appendChild(newActivityDesc);
    newActivityDiv.appendChild(document.createElement('br'));

    document.body.appendChild(newActivityDiv);
    document.body.appendChild(document.createElement('br'))
  }
}