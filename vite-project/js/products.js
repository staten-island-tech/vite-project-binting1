const products = [
  // Thriller Genre
  {
      title: "The Silent Patient",
      author: "By Alex Michaelides",
      img: "img/silent patient.jpg",  // Removed image URL
      altText: "The Silent Patient",
      price: 19,  // Converted to number
      genre: "Thriller",  // Updated genre
      availability: "no",  // Changed to "no"
  },
  {
      title: "Gone Girl",
      author: "By Gillian Flynn",
      img: "img/gone girl.jpg",  // Removed image URL
      altText: "Gone Girl",
      price: 15,  // Converted to number
      genre: "Thriller",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Girl with the Dragon Tattoo",
      author: "By Stieg Larsson",
      img: "img/girl with dragon tattoo.jpg",  // Removed image URL
      altText: "The Girl with the Dragon Tattoo",
      price: 18,  // Converted to number
      genre: "Thriller",
      availability: "no",  // Changed to "no"
  },
  {
      title: "The Woman in the Window",
      author: "By A. J. Finn",
      img: "img/woman in the window.jpg",  // Removed image URL
      altText: "The Woman in the Window",
      price: 20,  // Converted to number
      genre: "Thriller",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Reversal",
      author: "By Michael Connelly",
      img: "img/the reversal.jpg",  // Removed image URL
      altText: "The Reversal",
      price: 17,  // Converted to number
      genre: "Thriller",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Sharp Objects",
      author: "By Gillian Flynn",
      img: "img/sharp objects.jpg",  // Removed image URL
      altText: "Sharp Objects",
      price: 14,  // Converted to number
      genre: "Thriller",
      availability: "yes",  // Kept as "yes"
  },

  // Memoir Genre
  {
      title: "Becoming",
      author: "By Michelle Obama",
      img: "img/becoming.jpg",  // Removed image URL
      altText: "Becoming",
      price: 24,  // Converted to number
      genre: "Memoir",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Educated",
      author: "By Tara Westover",
      img: "img/educated.jpg",  // Removed image URL
      altText: "Educated",
      price: 16,  // Converted to number
      genre: "Memoir",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Glass Castle",
      author: "By Jeannette Walls",
      img: "img/glass castle.jpg",  // Removed image URL
      altText: "The Glass Castle",
      price: 18,  // Converted to number
      genre: "Memoir",
      availability: "no",  // Changed to "no"
  },
  {
      title: "When Breath Becomes Air",
      author: "By Paul Kalanithi",
      img: "img/when breath becomes air.jpg",  // Removed image URL
      altText: "When Breath Becomes Air",
      price: 19,  // Converted to number
      genre: "Memoir",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "Wild",
      author: "By Cheryl Strayed",
      img: "img/wild.jpg",  // Removed image URL
      altText: "Wild",
      price: 18,  // Converted to number
      genre: "Memoir",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Steve Jobs",
      author: "By Walter Isaacson",
      img: "img/steve jobs.jpg",  // Removed image URL
      altText: "Steve Jobs",
      price: 21,  // Converted to number
      genre: "Memoir",
      availability: "yes",  // Kept as "yes"
  },

  // Fantasy Genre
  {
      title: "The Name of the Wind",
      author: "By Patrick Rothfuss",
      img: "img/name of the wind.jpg",  // Removed image URL
      altText: "The Name of the Wind",
      price: 25,  // Converted to number
      genre: "Fantasy",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Circe",
      author: "By Madeline Miller",
      img: "img/circe.jpg",  // Removed image URL
      altText: "Circe",
      price: 23,  // Converted to number
      genre: "Fantasy",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Hobbit",
      author: "By J.R.R. Tolkien",
      img: "img/the hobbit.jpg",  // Removed image URL
      altText: "The Hobbit",
      price: 20,  // Converted to number
      genre: "Fantasy",
      availability: "no",  // Changed to "no"
  },
  {
      title: "The Night Circus",
      author: "By Erin Morgenstern",
      img: "img/night circus.jpg",  // Removed image URL
      altText: "The Night Circus",
      price: 24,  // Converted to number
      genre: "Fantasy",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "The Priory of the Orange Tree",
      author: "By Samantha Shannon",
      img: "img/priory of the orange tree.jpg",  // Removed image URL
      altText: "The Priory of the Orange Tree",
      price: 28,  // Converted to number
      genre: "Fantasy",
      availability: "no",  // Changed to "no"
  },
  {
      title: "A Court of Thorns and Roses",
      author: "By Sarah J. Maas",
      img: "img/a court of thorns and roses.jpg",  // Removed image URL
      altText: "A Court of Thorns and Roses",
      price: 22,  // Converted to number
      genre: "Fantasy",
      availability: "yes",  // Kept as "yes"
  },

  // Romance Genre
  {
      title: "Pride and Prejudice",
      author: "By Jane Austen",
      img: "img/pride and prejudice.jpg",  // Removed image URL
      altText: "Pride and Prejudice",
      price: 33,  // Converted to number
      genre: "Romance",
      availability: "yes",  // Kept as "yes"
      link: "https://www.amazon.com/dp/B000JXNJ0E",
  },
  {
      title: "The Notebook",
      author: "By Nicholas Sparks",
      img: "img/the notebook.jpg",  // Removed image URL
      altText: "The Notebook",
      price: 18,  // Converted to number
      genre: "Romance",
      availability: "no",  // Changed to "no"
  },
  {
      title: "Me Before You",
      author: "By Jojo Moyes",
      img: "img/me before you.jpg",  // Removed image URL
      altText: "Me Before You",
      price: 20,  // Converted to number
      genre: "Romance",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "Outlander",
      author: "By Diana Gabaldon",
      img: "img/outlander.jpg",  // Removed image URL
      altText: "Outlander",
      price: 22,  // Converted to number
      genre: "Romance",
      availability: "no",  // Changed to "no"
  },
  {
      title: "The Rosie Project",
      author: "By Graeme Simsion",
      img: "img/rosie project.jpg",  // Removed image URL
      altText: "The Rosie Project",
      price: 17,  // Converted to number
      genre: "Romance",
      availability: "yes",  // Kept as "yes"
  },
  {
      title: "Twilight",
      author: "By Stephenie Meyer",
      img: "img/twilight.jpg",  // Removed image URL
      altText: "Twilight",
      price: 16,  // Converted to number
      genre: "Romance",
      availability: "no",  // Changed to "no"
  }
];

products.sort((a,b) => a.title.localeCompare(b.title)); 
export {products};
