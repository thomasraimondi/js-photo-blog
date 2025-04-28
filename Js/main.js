const uri = "https://lanciweb.github.io/demo/api/pictures";
const listOfCards = document.getElementById("cards-list");
const modalImgTitle = document.querySelector(".modal-title");
const modalBody = document.getElementById("modal-body-img");

axios.get(uri).then((responce) => {
  const cards = responce.data;
  let cardsHtml = "";
  cards.forEach((card) => {
    cardsHtml += generatedCard(card);
  });
  listOfCards.innerHTML = cardsHtml;

  const cardNodes = document.querySelectorAll(".cardimg");
  cardNodes.forEach((card) => {
    card.addEventListener("click", () => {
      const cardId = parseInt(card.getAttribute("data-card-id"));
      cards.find((card) => {
        if (card.id === cardId) {
          modalImgTitle.innerText = card.title;
          modalBody.src = card.url;
        }
      });
    });
  });
});
const generatedCard = (card) => {
  return `<div class="cardimg col-12 col-md-6 col-xl-4" data-card-id="${card.id}">
            <div class="card my-4 p-3" data-bs-toggle="modal" data-bs-target="#img-on-focus">
              <div class="pin">
                <img src="./img/pin.svg" alt="" />
              </div>
              <div class="card-header">
                <img class="img-card" src="${card.url}" alt="" />
              </div>
              <div class="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                quaerat!
              </div>
            </div>
          </div>`;
};
