import '../css/style.css'
import {products} from '/js/products.js'

const DOMSelectors = { 
    container: document.querySelector(".container"), 
    main: document.querySelector(".main"), 
    button: document.querySelector(".btn"),
    card: document.querySelector(".card"),
    inStock: document.querySelector(".in-stock"),
    genreButtons: document.querySelectorAll(".genre-btn"),
}

products.forEach((product) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
    `<div class="card"> 
         <h3 class = "card-title">${product.title}</h3> 
         <img src="${product.img}" alt="${product.altText}" class="card-img"></img>
         <h5 class = "card-author">${product.author}</h5>
         <h4 class = "card-price">${product.price} USD</h4>
         <h5 class = "card-genre">Genre: ${product.genre}</h5>
         <h5 class = "card-stock">In stock: ${product.availability}</h5>
    </div>`
));

document.querySelector(".btn").addEventListener("click", function () {
    // document.body.classList.add("warm");
    if(document.body.classList.contains("cool")) {
        document.body.classList.add("warm");
        document.body.classList.remove("cool");
    } else {
        document.body.classList.add("cool");
        document.body.classList.remove("warm");
    }
});

function showInStockProducts () {
    DOMSelectors.inStock.addEventListener("click", function (event) {
      event.preventDefault (); 
      DOMSelectors.container.replacechildren();
      let inStock = products;
      inStock = inStock.filter((product) => product.availability === "yes")
      card(inStock);
    });
  };

  showInStockProducts ();

function example() {
    const saleProducts = products.foreach((product) => 
        {
            ..product;
            product.price = product.map(product.price * 0.8);
        });
    card(saleProducts);
}
