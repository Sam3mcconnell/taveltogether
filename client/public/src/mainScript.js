/**
 * @typedef {Object} card
 * @property {string} title Title of the card
 * @property {string} description Description of the card
 */
//TODO:
//The type above should be defined in a type file. Just like this: https://stackoverflow.com/questions/43183450/jsdoc-typedef-in-a-separate-file
//Just makes our life easier in the future. We could also do TS if we feel like it

/**
 * @param {Array.<card>} cards Array of cards
 */
function renderCards(cards) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        `;
    cardContainer.appendChild(cardElement);
  });
}
/**
 * 
 * @param {Array.<card>} cards 
 * @param {string} searchTerm 
 * @returns {Array.<card>}
 */
function filterCards(cards, searchTerm) {
  return cards.filter((card) => {
    return (
      card.title.toLowerCase().includes(searchTerm) ||
      card.description.toLowerCase().includes(searchTerm)
    );
  });
}
/**
 * 
 * @param {Array.<card>} cards 
 */
function handleSearchInput(cards) {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCards = filterCards(cards, searchTerm);
    renderCards(filteredCards);
  });
}

const storedCards = null;//sessionStorage.getItem("cards"); 
if (storedCards) {
  const parsedCards = JSON.parse(storedCards);
  renderCards(parsedCards);
  handleSearchInput(parsedCards);
} else {
  fetch("http://localhost:3000/api/getCards")
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem("cards", JSON.stringify(data));
      renderCards(data);
    })
    .catch((error) => console.error("Error fetching cards:", error));
}
