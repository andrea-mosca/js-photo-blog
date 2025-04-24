const APIUri = `https://lanciweb.github.io/demo/api/pictures/`;

const cardRow = document.getElementById("card-row");

axios.get(APIUri).then((response) => {});
for (let i = 0; i < 6; i++) {
  axios.get(APIUri).then((response) => {
    const currentCard = response.data[i];
    cardRow.innerHTML += `
                           <div class="col-12 col-md-6 col-lg-4">
                        <div class="card d-inline-block">
                            <div class="card-pin"><img src="./img/pin.svg" alt=""></div>
                            <div class="card-img-top px-3 pt-3">
                                <img src="${currentCard.url}" alt="">
                            </div>
                            <div class="card-body py-1">
                                <div class="card-text">
                                    <div class="data-img">${currentCard.date}</div>
                                    <h4 class="fw-bold">${currentCard.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>`;
  }).catch(error =>{
    alert(error.message);
  })
};

// card si inclina al passaggio del mouse

