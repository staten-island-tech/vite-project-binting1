import '../css/style.css'
import {products} from '/js/products.js'

const DOMSelectors = { 
    container: document.querySelector(".container"), 
    main: document.querySelector(".main"), 
}

function createCard (products) {
    products.forEach((product) => DOMSelectors.container.insertAdjacentHTML("beforeend", 
        `<div class="card"> 
            <h4 class = "card-title">${product.title}</h4> 
            <img src="${product.img}" alt="${product.altText}" class="card-img"></img>
            <h5 class = "card-author">${product.author}</h5>
            <h4 class = "card-price">${product.price} USD</h4>
            <h5 class = "card-genre">Genre: ${product.genre}</h5>
            <h5 class = "card-stock">In stock: ${product.availability}</h5>
        </div>`
    ));
};

createCard (products);

document.querySelector(".btn").addEventListener("click", function () {
    DOMSelectors.container.innerHTML = "";
    document.body.classList.remove("fantasy", "memoir", "romance", "thriller");
    createCard(products);
});

document.querySelector(".in-stock").addEventListener("click", function () {
      DOMSelectors.container.innerHTML = "";
      let inStock = products;
      inStock = inStock.filter((product) => product.availability === "yes");
      createCard(inStock);
    });


document.querySelector(".thriller").addEventListener("click", function (){
    DOMSelectors.container.innerHTML = "";
    let thriller = products; 
    thriller = thriller.filter((product) => product.genre === "Thriller");
    createCard(thriller);
    if(document.body.classList.contains("fantasy", "memoir", "romance")) {
        document.body.classList.add("thriller");
        document.body.classList.remove("fantasy", "memoir", "romance");
    } else {
        document.body.classList.add("thriller");
        document.body.classList.remove("fantasy", "memoir", "romance");
    }
});

document.querySelector(".fantasy").addEventListener("click", function (){
    DOMSelectors.container.innerHTML = "";
    let fantasy = products; 
    fantasy = fantasy.filter((product) => product.genre === "Fantasy");
    createCard(fantasy);
    if(document.body.classList.contains("thriller", "memoir", "romance")) {
        document.body.classList.add("fantasy");
        document.body.classList.remove("thriller", "memoir", "romance");
    } else {
        document.body.classList.add("fantasy");
        document.body.classList.remove("thriller", "memoir", "romance");
    }
});

document.querySelector(".memoir").addEventListener("click", function (){
    DOMSelectors.container.innerHTML = "";
    let memoir = products; 
    memoir = memoir.filter((product) => product.genre === "Memoir");
    createCard(memoir);
    if(document.body.classList.contains("fantasy", "thriller", "romance")) {
        document.body.classList.add("memoir");
        document.body.classList.remove("fantasy", "thriller", "romance");
    } else {
        document.body.classList.add("memoir");
        document.body.classList.remove("fantasy", "thriller", "romance");
    }
});

document.querySelector(".romance").addEventListener("click", function (){
    DOMSelectors.container.innerHTML = "";
    let romance = products; 
    romance = romance.filter((product) => product.genre === "Romance");
    createCard(romance);
    if(document.body.classList.contains("fantasy", "memoir", "thriller")) {
        document.body.classList.add("romance");
        document.body.classList.remove("fantasy", "memoir", "thriller");
    } else {
        document.body.classList.add("romance");
        document.body.classList.remove("fantasy", "memoir", "thriller");
    }
});