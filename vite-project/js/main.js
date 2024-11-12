import '../css/style.css'
import {products} from '/JS/products.js'

const DOMSelectors = { 
    container: document.querySelector(".container"), 
    main: document.querySelector(".main"), 
    button: document.querySelector(".btn"),
    card: document.querySelector(".card"),
}

products.forEach((product) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
    `<div class="card"> 
         <h3 class = "card-title">${product.title}</h3> 
         <img src="${product.img}" alt="${product.altText}" class="card-img"></img>
         <h5 class = "card-author">${product.author}</h5>
         <h4 class = "card-price">${product.price}</h4>
         <h4 class = "card-genre">${product.genre}</h4>
         <h5 class = "card-stock">${product.availability}</h5>
         <button class = "btn" src="${product.link}>Buy</button>
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

// createCards (movies);

// function showByGenre(genre) {
//     document.querySelector(".container").innerHTML="";
//     createCards(movies);
// }

// showByGenre ();

// movies.filter((movie) => movie.actor.include("blabhh"));
