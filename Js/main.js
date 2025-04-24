const uri = "https://lanciweb.github.io/demo/api/pictures";
const listOfCards = document.getElementById("cards-list");
const modalImgLabel = document.getElementById("img-label");
const modalBody = document.getElementById("modal-body-img");

console.log(modalImgLabel);
console.log(modalBody.src);

axios.get(uri).then((responce) => {
  const imges = responce.data;
  let cardsHtml = "";
  imges.forEach((image) => {
    cardsHtml += generatedCard(image);
  });
  listOfCards.innerHTML = cardsHtml;
  const imgCard = document.querySelectorAll(".img-card");
  imgCard.forEach((img) => {
    img.addEventListener("click", () => {
      modalImgLabel.innerText = "testo immagine";
      modalBody.src = img.src;
    });
  });
});

const generatedCard = (card) => {
  return `<div class="col-12 col-md-6 col-xl-4">
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
