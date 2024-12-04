let loggedIn= false;
let username;
let password;


while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");


   if(username === "Moseti Dickson" && password === "welcome"){
      loggedIn = true;
      console.log("You have successifully logged in!");
   }
   else{
      console.log("Enter the Valid Credentials");
   }
}