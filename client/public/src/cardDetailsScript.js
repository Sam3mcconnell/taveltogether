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
}