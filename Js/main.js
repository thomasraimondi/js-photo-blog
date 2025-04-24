const uri = "https://lanciweb.github.io/demo/api/pictures";
const cardsList = document.getElementById("cards-list");

axios.get(uri).then((responce) => {
  const imges = responce.data;
  let cardsHtml = "";
  imges.forEach((image) => {
    cardsHtml += generatedCard(image);
  });
  cardsList.innerHTML = cardsHtml;
});

const generatedCard = (card) => {
  return `<div class="col-12 col-md-6 col-xl-4">
            <div class="card my-4 p-3">
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
