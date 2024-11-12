
const products = [
    {
        title: "Pride and Prejudice",
        author: "By Jane Austen",
        img: "https://m.media-amazon.com/images/I/81NLDvyAHrL._AC_UF1000,1000_QL80_.jpg",
        altText: "Pride and Prejudice",  // Added altText
        price: "33 USD", 
        genre: "Classic Fiction",
        availability: "yes",
        link: "https://www.amazon.com/dp/B000JXNJ0E",
    },
    {
        title: "Moby-Dick",
        author: "By Herman Melville",
        img: "https://m.media-amazon.com/images/I/61PBBKyZ1rL._AC_UF1000,1000_QL80_.jpg",
        altText: "Moby-Dick",  // Added altText
        price: "28 USD", 
        genre: "Classic Fiction",
        availability: "yes",
    },
    {
        title: "1984",
        author: "By George Orwell",
        img: "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg",
        altText: "1984",  // Added altText
        price: "22 USD", 
        genre: "Dystopian Fiction",
        availability: "yes",
    },
    {
        title: "Wuthering Heights",
        author: "By Emily Brontë",
        img: "https://m.media-amazon.com/images/I/81-jFO1dm8L._AC_UF1000,1000_QL80_.jpg",
        altText: "Wuthering Heights",  // Added altText
        price: "18 USD", 
        genre: "Classic Romance",
        availability: "yes",
    },
    {
        title: "The Catcher in the Rye",
        author: "By J.D. Salinger",
        img: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg",
        altText: "The Catcher in the Rye",  // Added altText
        price: "20 USD", 
        genre: "Classic Fiction",
        availability: "yes",
    },
    {
        title: "Crime and Punishment",
        author: "By Fyodor Dostoevsky",
        img: "https://m.media-amazon.com/images/I/91pCP7Zn1bL.jpg",
        altText: "Crime and Punishment",  // Added altText
        price: "25 USD", 
        genre: "Psychological Fiction",
        availability: "yes",
    },
    {
        title: "Frankenstein",
        author: "By Mary Shelley",
        img: "https://m.media-amazon.com/images/I/81gOanAl-CL.jpg",
        altText: "Frankenstein",  // Added altText
        price: "19 USD", 
        genre: "Gothic Horror",
        availability: "yes",
    },
    {
        title: "The Great Gatsby",
        author: "By F. Scott Fitzgerald",
        img: "https://m.media-amazon.com/images/I/81XItJ62N0L.jpg",
        altText: "The Great Gatsby",  // Added altText
        price: "18 USD", 
        genre: "Classic Fiction",
        availability: "yes",
    },
    {
        title: "Jane Eyre",
        author: "By Charlotte Brontë",
        img: "https://m.media-amazon.com/images/I/81Z9nZf1liL.jpg",
        altText: "Jane Eyre",  // Added altText
        price: "17 USD", 
        genre: "Classic Romance",
        availability: "yes",
    },
    {
        title: "To Kill a Mockingbird",
        author: "By Harper Lee",
        img: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg",
        altText: "To Kill a Mockingbird",  // Added altText
        price: "21 USD", 
        genre: "Classic Fiction",
        availability: "yes",
    },
    {
        title: "Brave New World",
        author: "By Aldous Huxley",
        img: "https://m.media-amazon.com/images/I/71OywF2qKkL.jpg",
        altText: "Brave New World",  // Added altText
        price: "23 USD", 
        genre: "Dystopian Fiction",
        availability: "yes",
    },
    {
        title: "Les Misérables",
        author: "By Victor Hugo",
        img: "https://m.media-amazon.com/images/I/81jv63y9H4L.jpg",
        altText: "Les Misérables",  // Added altText
        price: "30 USD", 
        genre: "Historical Fiction",
        availability: "yes",
    },
    {
        title: "The Road",
        author: "By Cormac McCarthy",
        img: "https://m.media-amazon.com/images/I/71GbK74iM8L.jpg",
        altText: "The Road",  // Added altText
        price: "25 USD", 
        genre: "Post-apocalyptic",
        availability: "yes",
    },
    {
        title: "The Night Circus",
        author: "By Erin Morgenstern",
        img: "https://m.media-amazon.com/images/I/91iH5fLO2pL.jpg",
        altText: "The Night Circus",  // Added altText
        price: "24 USD", 
        genre: "Fantasy Fiction",
        availability: "yes",
    },
    {
        title: "Where the Crawdads Sing",
        author: "By Delia Owens",
        img: "https://m.media-amazon.com/images/I/81dyx7V6WzL.jpg",
        altText: "Where the Crawdads Sing",  // Added altText
        price: "18 USD", 
        genre: "Mystery, Literary Fiction",
        availability: "yes",
    },
    {
        title: "The Underground Railroad",
        author: "By Colson Whitehead",
        img: "https://m.media-amazon.com/images/I/91fb0lVxFfL.jpg",
        altText: "The Underground Railroad",  // Added altText
        price: "26 USD", 
        genre: "Historical Fiction",
        availability: "yes",
    },
    {
        title: "The Goldfinch",
        author: "By Donna Tartt",
        img: "https://m.media-amazon.com/images/I/91jSkNYH2lL.jpg",
        altText: "The Goldfinch",  // Added altText
        price: "27 USD", 
        genre: "Literary Fiction",
        availability: "yes",
    },
    {
        title: "Normal People",
        author: "By Sally Rooney",
        img: "https://m.media-amazon.com/images/I/71OaWmlP5+L.jpg",
        altText: "Normal People",  // Added altText
        price: "22 USD", 
        genre: "Contemporary Fiction",
        availability: "yes",
    },
    {
        title: "Circe",
        author: "By Madeline Miller",
        img: "https://m.media-amazon.com/images/I/91ziYJH5uwL.jpg",
        altText: "Circe",  // Added altText
        price: "23 USD", 
        genre: "Fantasy Fiction",
        availability: "yes",
    },
    {
        title: "The Silent Patient",
        author: "By Alex Michaelides",
        img: "https://m.media-amazon.com/images/I/91fIVdo3eBL.jpg",
        altText: "The Silent Patient",  // Added altText
        price: "19 USD", 
        genre: "Psychological Thriller",
        availability: "yes",
    },
    {
        title: "A Little Life",
        author: "By Hanya Yanagihara",
        img: "https://m.media-amazon.com/images/I/91xxz02nH+L.jpg",
        altText: "A Little Life",  // Added altText
        price: "29 USD", 
        genre: "Contemporary Fiction",
        availability: "yes",
    },
    {
        title: "Educated",
        author: "By Tara Westover",
        img: "https://m.media-amazon.com/images/I/91wKDODkgWL._AC_UF1000,1000_QL80_.jpg",
        altText: "Educated",  // Added altText
        price: "16 USD", 
        genre: "Memoir",
        availability: "yes",
    },
    {
        title: "The Midnight Library",
        author: "By Matt Haig",
        img: "https://m.media-amazon.com/images/I/71OByp8C+mL.jpg",
        altText: "The Midnight Library",  // Added altText
        price: "20 USD", 
        genre: "Fantasy Fiction",
        availability: "yes",
    }
];

export {products}
