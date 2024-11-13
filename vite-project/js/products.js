<<<<<<< HEAD
const products = [
  // Thriller Genre
  {
      title: "The Silent Patient",
      author: "By Alex Michaelides",
      img: "",  // Removed image URL
      altText: "The Silent Patient",
      price: 19,  // Converted to number
      genre: "Thriller",  // Updated genre
      availability: "no",  // Changed to "no"
  },
  {
      title: "Gone Girl",
      author: "By Gillian Flynn",
      img: "",  // Removed image URL
      altText: "Gone Girl",
      price: 15,  // Converted to number
      genre: "Thriller",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Girl with the Dragon Tattoo",
      author: "By Stieg Larsson",
      img: "",  // Removed image URL
      altText: "The Girl with the Dragon Tattoo",
      price: 18,  // Converted to number
      genre: "Thriller",
      availability: "no",  // Changed to "no"
  },
  {
      title: "The Woman in the Window",
      author: "By A. J. Finn",
      img: "",  // Removed image URL
      altText: "The Woman in the Window",
      price: 20,  // Converted to number
      genre: "Thriller",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Reversal",
      author: "By Michael Connelly",
      img: "",  // Removed image URL
      altText: "The Reversal",
      price: 17,  // Converted to number
      genre: "Thriller",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Sharp Objects",
      author: "By Gillian Flynn",
      img: "",  // Removed image URL
      altText: "Sharp Objects",
      price: 14,  // Converted to number
      genre: "Thriller",
      availability: "yes",  // Kept as "yes"
  },

  // Memoir Genre
  {
      title: "Becoming",
      author: "By Michelle Obama",
      img: "",  // Removed image URL
      altText: "Becoming",
      price: 24,  // Converted to number
      genre: "Memoir",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Educated",
      author: "By Tara Westover",
      img: "",  // Removed image URL
      altText: "Educated",
      price: 16,  // Converted to number
      genre: "Memoir",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Glass Castle",
      author: "By Jeannette Walls",
      img: "",  // Removed image URL
      altText: "The Glass Castle",
      price: 18,  // Converted to number
      genre: "Memoir",
      availability: "no",  // Changed to "no"
  },
  {
      title: "When Breath Becomes Air",
      author: "By Paul Kalanithi",
      img: "",  // Removed image URL
      altText: "When Breath Becomes Air",
      price: 19,  // Converted to number
      genre: "Memoir",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "Wild",
      author: "By Cheryl Strayed",
      img: "",  // Removed image URL
      altText: "Wild",
      price: 18,  // Converted to number
      genre: "Memoir",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Steve Jobs",
      author: "By Walter Isaacson",
      img: "",  // Removed image URL
      altText: "Steve Jobs",
      price: 21,  // Converted to number
      genre: "Memoir",
      availability: "yes",  // Kept as "yes"
  },

  // Fantasy Genre
  {
      title: "The Name of the Wind",
      author: "By Patrick Rothfuss",
      img: "",  // Removed image URL
      altText: "The Name of the Wind",
      price: 25,  // Converted to number
      genre: "Fantasy",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Circe",
      author: "By Madeline Miller",
      img: "",  // Removed image URL
      altText: "Circe",
      price: 23,  // Converted to number
      genre: "Fantasy",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Hobbit",
      author: "By J.R.R. Tolkien",
      img: "",  // Removed image URL
      altText: "The Hobbit",
      price: 20,  // Converted to number
      genre: "Fantasy",
      availability: "no",  // Changed to "no"
  },
  {
      title: "The Night Circus",
      author: "By Erin Morgenstern",
      img: "",  // Removed image URL
      altText: "The Night Circus",
      price: 24,  // Converted to number
      genre: "Fantasy",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Priory of the Orange Tree",
      author: "By Samantha Shannon",
      img: "",  // Removed image URL
      altText: "The Priory of the Orange Tree",
      price: 28,  // Converted to number
      genre: "Fantasy",
      availability: "no",  // Changed to "no"
  },
  {
      title: "A Court of Thorns and Roses",
      author: "By Sarah J. Maas",
      img: "",  // Removed image URL
      altText: "A Court of Thorns and Roses",
      price: 22,  // Converted to number
      genre: "Fantasy",
      availability: "yes",  // Kept as "yes"
  },

  // Romance Genre
  {
      title: "Pride and Prejudice",
      author: "By Jane Austen",
      img: "",  // Removed image URL
      altText: "Pride and Prejudice",
      price: 33,  // Converted to number
      genre: "Romance",
      availability: "yes",  // Kept as "yes"
      link: "https://www.amazon.com/dp/B000JXNJ0E",
  },
  {
      title: "The Notebook",
      author: "By Nicholas Sparks",
      img: "",  // Removed image URL
      altText: "The Notebook",
      price: 18,  // Converted to number
      genre: "Romance",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Me Before You",
      author: "By Jojo Moyes",
      img: "",  // Removed image URL
      altText: "Me Before You",
      price: 20,  // Converted to number
      genre: "Romance",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "Outlander",
      author: "By Diana Gabaldon",
      img: "",  // Removed image URL
      altText: "Outlander",
      price: 22,  // Converted to number
      genre: "Romance",
      availability: "no",  // Changed to "no"
  },
  {
      title: "The Rosie Project",
      author: "By Graeme Simsion",
      img: "",  // Removed image URL
      altText: "The Rosie Project",
      price: 17,  // Converted to number
      genre: "Romance",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "Twilight",
      author: "By Stephenie Meyer",
      img: "",  // Removed image URL
      altText: "Twilight",
      price: 16,  // Converted to number
      genre: "Romance",
      availability: "no",  // Changed to "no"
  }
];

export {products};
=======

const products = [
    {
        title: "aa and Prejudice",
        author: "By Jane Austen",
        img: "/pride and prejudice.jpg",
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
        img: "/crime and punishment.jpg",
        altText: "Crime and Punishment",  // Added altText
        price: "25 USD", 
        genre: "Psychological Fiction",
        availability: "yes",
    },
    {
        title: "Frankenstein",
        author: "By Mary Shelley",
        img: "https://m.media-amazon.com/images/I/515zE1GxvAL._AC_UF1000,1000_QL80_.jpg",
        altText: "Frankenstein",  // Added altText
        price: "19 USD", 
        genre: "Gothic Horror",
        availability: "yes",
    },
    {
        title: "The Great Gatsby",
        author: "By F. Scott Fitzgerald",
        img: "https://m.media-amazon.com/images/I/61dRoDRubtL._SY342_.jpg",
        altText: "The Great Gatsby",  // Added altText
        price: "18 USD", 
        genre: "Classic Fiction",
        availability: "yes",
    },
    {
        title: "Jane Eyre",
        author: "By Charlotte Brontë",
        img: "/jane eyre.jpg",
        altText: "Jane Eyre",  // Added altText
        price: "17 USD", 
        genre: "Classic Romance",
        availability: "yes",
    },
    {
        title: "To Kill a Mockingbird",
        author: "By Harper Lee",
        img: "https://m.media-amazon.com/images/I/61F2kZtma8L._AC_UF1000,1000_QL80_.jpg",
        altText: "To Kill a Mockingbird",  // Added altText
        price: "21 USD", 
        genre: "Classic Fiction",
        availability: "yes",
    },
    {
        title: "Brave New World",
        author: "By Aldous Huxley",
        img: "https://th.bing.com/th/id/OIP.UtrUfL2kE35h42M4atDQUwHaLK?w=203&h=306&c=7&r=0&o=5&pid=1.7",
        altText: "Brave New World",  // Added altText
        price: "23 USD", 
        genre: "Dystopian Fiction",
        availability: "yes",
    },
    {
        title: "Les Misérables",
        author: "By Victor Hugo",
        img: "https://m.media-amazon.com/images/I/71mPzsZvh6L._AC_UF1000,1000_QL80_.jpg",
        altText: "Les Misérables",  // Added altText
        price: "30 USD", 
        genre: "Historical Fiction",
        availability: "yes",
    },
    {
        title: "The Road",
        author: "By Cormac McCarthy",
        img: "/the road.jpg",
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
>>>>>>> 3c6d25c2920dbaa1b9445e990685986581f615e5
