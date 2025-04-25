const APIUri = `https://lanciweb.github.io/demo/api/pictures/`;

const cardRow = document.getElementById("card-row");

axios.get(APIUri).then((response) => {
  const currentCard = response.data;
 
  currentCard.forEach((element) => {
      cardRow.innerHTML += `
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
    })
    .catch((error) => {
      alert(error.message);
    });
});


