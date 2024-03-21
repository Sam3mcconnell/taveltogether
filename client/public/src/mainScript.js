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

function filterCards(cards, searchTerm) {
  return cards.filter((card) => {
    return (
      card.title.toLowerCase().includes(searchTerm) ||
      card.description.toLowerCase().includes(searchTerm)
    );
  });
}

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
