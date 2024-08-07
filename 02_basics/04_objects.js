// const tinderUser = new Object() //Singleton object

const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); //{ id: '123abc', name: 'sammy', isLoggedIn: false }

//Object in object
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Amit",
      lastname: "Sharma",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

//const obj3 = { obj1, obj2 }; //object in object
//console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({}, obj1, obj2); //({target}, source);

const obj3 = { ...obj1, ...obj2 }; // spread method
//console.log(obj3);

//Value from database
const users = [
  {
    id: 1,
    email: "a@email.com",
  },
  {
    id: 2,
    email: "b@email.com",
  },
  {
    id: 3,
    email: "c@email.com",
  },
];

// console.log(users[1].email); // b@email.com

// console.log(Object.keys(tinderUser)); // array : [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // array : [ '123abc', 'sammy', false ]
// console.log(Object.entries(tinderUser)); // all value > ['','']

// //check the value present or not >
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
// console.log(tinderUser.hasOwnProperty("isLogged")); // false

//Destructuring
const course = {
  coursename: "JS",
  email: "a@gmail.com",
  courseInstructor: "Amit",
};
const { courseInstructor: instructor } = course;
console.log(instructor);
