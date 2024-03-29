import {fetchCardDetails} from "../src/apiCalls.js"
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");

const cardDataResponse = await fetchCardDetails(id);
if (cardDataResponse.status !== 200) {
  console.log("error fetching card details");
  //Maybe an icon or something here too?
} else {
  const cardDetailsJson = await cardDataResponse.json();
  document.getElementById("json-container").innerHTML = JSON.stringify(cardDetailsJson);
  document.getElementById("card-title").innerHTML = cardDetailsJson.title;
  document.getElementById("card-description").innerHTML = cardDetailsJson.description
  
  for (var i = 0; i < cardDetailsJson.activities.length; i++) {
    const newActivityDiv = document.createElement('div');
    newActivityDiv.setAttribute('class', 'activity')

    const newActivityName = document.createElement('text');
    newActivityName.textContent = cardDetailsJson.activities[i].name;
    newActivityName.setAttribute('class', 'activity-name');
    newActivityDiv.appendChild(newActivityName);
    newActivityDiv.appendChild(document.createElement('br'));

    const newActivityDesc = document.createElement('text');
    newActivityDesc.textContent = cardDetailsJson.activities[i].description;
    newActivityDesc.setAttribute('class', 'activity-desc');
    newActivityDiv.appendChild(newActivityDesc);
    newActivityDiv.appendChild(document.createElement('br'));

    document.body.appendChild(newActivityDiv);
  }
}