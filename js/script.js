// * VARIABILI
// assergnazione link api ad una variabile
const APIUri = `https://lanciweb.github.io/demo/api/pictures/`;
// html element
const cardRow = document.getElementById("card-row");
// overlay el
const overlayEl = document.getElementById("overlay-element");

// *FUNZIONE CHE GENERA UNA CARD NEL'HTML
const generateHTMLCard = (element) => {
    const cardHTML = `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card d-inline-block">
            <div class="card-pin"><img src="./img/pin.svg" alt=""></div>
            <div class="card-img-top px-3 pt-3">
                 <img src="${element.url}" alt="">
            </div>
            <div class="card-body py-1">
                <div class="card-text">
                    <div class="data-img">${element.date}</div>
                    <h2 class="fw-bold">${element.title}</h2>
                </div>
            </div>
        </div>
    </div>`;
    return cardHTML;
};

// * CHIAMATA AJAX ALL'API
axios.get(APIUri).then((response) => {
  const currentCard = response.data;
    let cardsHTML = '';
  currentCard
    .forEach((element) => {
      cardsHTML += generateHTMLCard(element);
    });
    cardRow.innerHTML += cardsHTML;

    // assegno ad una variabile le varie card generate
    const cardNodes = document.querySelectorAll(".card");
    
    // operazioni da svolgere al click di ogni singola card
    cardNodes.forEach(cardNode => {
        cardNode.addEventListener("click", ()=>{
            // assegno ad una variabile l'url dell'immagine cliccata
            const imageSrc = cardNode.querySelector('.card-img-top img').src;
            // creazione html dell'immagine selezionata
            overlayEl.innerHTML = `
            <div><button type="button" class="btn btn-light" id="close-overlay">Close</button></div>
             <img src="${imageSrc}" alt="">`
            overlayEl.classList.remove("d-none");

            // creazione funzione per il bottone di chiusura, una volta comparso
            const closeOverlay = document.getElementById("close-overlay");
            closeOverlay.addEventListener("click", () =>{ overlayEl.classList.add("d-none");});
        });
    });
    
});


