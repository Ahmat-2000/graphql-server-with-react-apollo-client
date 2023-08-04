// represente our database
const UserList = [
   {
      id : 1,
      name : "John",
      username: "john",
      age : 20,
      nationality : "CANADA",
      friends : [
         {
            id : 2,
            name : "Sam",
            username: "duck",
            age : 15,
            nationality : "BRAZIL",
         },
         {
            id : 3,
            name : "Clara",
            username: "moly",
            age : 18,
            nationality : "FRANCE",
         },
         {
            id : 4,
            name : "Jun",
            username: "Mark",
            age : 20,
            nationality : "SPAIN",
         }
      ] 
   },
   {
      id : 2,
      name : "Sam",
      username: "duck",
      age : 15,
      nationality : "BRAZIL",
   },
   {
      id : 3,
      name : "Clara",
      username: "moly",
      age : 18,
      nationality : "FRANCE",
   },
   {
      id : 4,
      name : "Jun",
      username: "Mark",
      age : 20,
      nationality : "SPAIN",
      friends : [{
         id : 5,
         name : "Zara",
         username: "Allamin",
         age : 23,
         nationality : "TCHAD",
      }]
   },
   {
      id : 5,
      name : "Zara",
      username: "Allamin",
      age : 23,
      nationality : "TCHAD",
   }
];


// movies
const MovieList = [
   {
      id: 1,
      name: "One piece red",
      yearOfPubication: 2023,
      isAnAnimation: true
   },
   {
      id: 2,
      name: "One piece Strong",
      yearOfPubication: 2015,
      isAnAnimation: true
   },
   {
      id: 3,
      name: "Bat Man",
      yearOfPubication: 2020,
      isAnAnimation: true
   },
   {
      id: 4,
      name: "Rash Four",
      yearOfPubication: 2000,
      isAnAnimation: false
   },
   {
      id: 5,
      name: "Rash Four 2",
      yearOfPubication: 2005,
      isAnAnimation: false
   },
];

module.exports = {UserList, MovieList};