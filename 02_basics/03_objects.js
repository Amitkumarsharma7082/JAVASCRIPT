//Singleton

//object.create

//object literals
const mySym = "key1";

const JsUser = {
  //decleare object as key: value
  name: "Amit",
  "full name": "Amit Kumar Sharma",
  [mySym]: "myKey1",
  age: 25,
  location: "Haryana",
  email: "amit@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
// console.log(JsUser.email); //not good option
// console.log(JsUser["full name"]);//[] is good method for access string
//console.log(JsUser[mySym]);

JsUser.email = "amit.kumar.sharma@microsoft.com";
//Object.freeze(JsUser);
//JsUser.email = "amit@chatgpt.com";

// console.log(JsUser);

//Add Functions
JsUser.greeting = function () {
  console.log("Hello JS user");
};
//Add this method in function
JsUser.greetingTwo = function () {
  console.log(`Hello JS user ${this.name}`);
};

console.log(JsUser.greeting()); //Hello JS user
console.log(JsUser.greetingTwo()); //Hello JS user Amit
