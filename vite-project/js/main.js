import '../css/style.css'
<<<<<<< HEAD
import {products} from '/js/products.js'
=======
import {products} from '/JS/products.js'
>>>>>>> 3c6d25c2920dbaa1b9445e990685986581f615e5

const DOMSelectors = { 
    container: document.querySelector(".container"), 
    main: document.querySelector(".main"), 
    button: document.querySelector(".btn"),
    card: document.querySelector(".card"),
<<<<<<< HEAD
    inStock: document.querySelector(".in-stock"),
    genreButtons: document.querySelectorAll(".genre-btn"),

=======
>>>>>>> 3c6d25c2920dbaa1b9445e990685986581f615e5
}

products.forEach((product) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
    `<div class="card"> 
         <h3 class = "card-title">${product.title}</h3> 
         <img src="${product.img}" alt="${product.altText}" class="card-img"></img>
         <h5 class = "card-author">${product.author}</h5>
<<<<<<< HEAD
         <h4 class = "card-price">${product.price} USD</h4>
         <h5 class = "card-genre">Genre: ${product.genre}</h5>
         <h5 class = "card-stock">In stock: ${product.availability}</h5>
=======
         <h4 class = "card-price">${product.price}</h4>
         <h4 class = "card-genre">${product.genre}</h4>
         <h5 class = "card-stock">${product.availability}</h5>
         <button class = "btn" src="${product.link}>Buy</button>
>>>>>>> 3c6d25c2920dbaa1b9445e990685986581f615e5
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

<<<<<<< HEAD
function showInStockProducts () {
    DOMSelectors.availability.addEventListener("click", function (event) {
      event.preventDefault (); 
      DOMSelectors.container.innerHTML ="";

      const inStock = product 
      .filter((produts) => product.availability === "yes")
      card(inStock);
    });
  };

  showInStockProducts ();
=======
// createCards (movies);

// function showByGenre(genre) {
//     document.querySelector(".container").innerHTML="";
//     createCards(movies);
// }

// showByGenre ();

// movies.filter((movie) => movie.actor.include("blabhh"));
>>>>>>> 3c6d25c2920dbaa1b9445e990685986581f615e5
