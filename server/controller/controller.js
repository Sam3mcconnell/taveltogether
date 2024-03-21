
/**
 * Returns "cards" (itinerarys) name needs to be changed in the future
 * @param {Request} req - Request where you can specify search criterias etc in the future
 * @param {Response} res - Responses the itinerarys which have been specified.
 */
export async function getCards(req, res) {
  //Here we put the db fetching etc
  const cardsData = [
    {
      title: "Paris, France",
      description:
        "Explore the iconic landmarks and indulge in French cuisine.",
    },
    {
      title: "Tokyo, Japan",
      description:
        "Experience the bustling streets, delicious food, and rich culture of Tokyo.",
    },
    {
      title: "Bali, Indonesia",
      description:
        "Relax on pristine beaches, explore lush jungles, and discover vibrant local culture.",
    },
    {
      title: "New York City, USA",
      description:
        "Immerse yourself in the energy of the city that never sleeps and explore its diverse neighborhoods.",
    },
    {
      title: "Cape Town, South Africa",
      description:
        "Discover breathtaking natural landscapes, vibrant city life, and rich cultural heritage.",
    },
    {
      title: "Rome, Italy",
      description:
        "Wander through ancient ruins, savor authentic Italian cuisine, and soak in the charm of the Eternal City.",
    },
  ];
  res.status(200).json(cardsData);
}
