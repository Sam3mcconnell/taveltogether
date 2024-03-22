const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");
const cardData = window.sessionStorage.getItem(id);

document.getElementById("json-container").innerHTML = cardData;
