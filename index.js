class User {
    static userCount = 0;  
    static users = [];  // Array to store registered users

    constructor(username, homePlace) {
        this.username = username;
        this.homePlace = homePlace;
        User.users.push(this); // Add user to the list
        User.userCount++;
    }
}

let keyedIn = false;

while (!keyedIn) {
    if (User.userCount >= 5) {
        // Display all registered users before stopping further logins
        let userList = "Registered Users:\n";
        User.users.forEach((user, index) => {
            userList += `${index + 1}. ${user.username} from ${user.homePlace}\n`;
        });

        window.alert(userList);
        window.alert("User registration is now closed. No more users can log in.");
        break; // Exit the loop, stopping further registrations
    }

    let username = window.prompt("Enter your name:");
    let homePlace = window.prompt("Where do you come from?");

    if (username === "" || homePlace === "") {
        window.alert("Please enter the required credentials!");

        if (User.userCount === 0) {
            window.alert("We have no users at the moment.");
        }
    } else {
        let newUser = new User(username, homePlace);
        window.alert(`You have logged in successfully! Welcome, ${newUser.username}!`);

        if (User.userCount === 1) {
            window.alert("We only have 1 user in this platform.");
        } else {
            window.alert(`We have ${User.userCount} users in this platform.`);
        }
    }
}

