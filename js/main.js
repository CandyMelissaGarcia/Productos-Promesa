const divProductos = document.getElementById("divProductos");
const alertError = document.getElementById("alertError");
const URLMain = "https://fakestoreapi.com/products/";

function getData() {
    fetch(URLMain).then( (response) => { 
        console.log(response);
        response.json().then((res) =>{
            createCards(res);
        });
    }).catch((err)=> {
        alertError.innerText = `Problema al traer la información ${err}`;
        alertError.style.display = "block";
    });
    
}//getData

getData();

function createCards(res) {
    let html = "";
    res.forEach((producto) => {
        html += `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${producto.image}" class="card-img-top p-3" alt="${producto.title}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">${producto.description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Precio: $${producto.price}</small><br>
                        <small class="text-warning">⭐ ${producto.rating.rate} (${producto.rating.count} valoraciones)</small>
                    </div>
                </div>
            </div>
        `;
    });

    divProductos.innerHTML = html; 
}


