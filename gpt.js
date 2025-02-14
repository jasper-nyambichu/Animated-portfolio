// Selecting HTML elements
const mainPara = document.getElementById("main-para");
const username = document.getElementById("username");
const myBtn = document.getElementById("myBtn");
const homePlace = document.getElementById("homePlace");
const course = document.getElementById("course");
const nextBtn = document.getElementById("nextBtn");

class User {
    static userCount = 0;
    static users = [];

    constructor(username, homePlace, course) {
        this.username = username;
        this.homePlace = homePlace;
        this.course = course;
        User.users.push(this);
        User.userCount++;
    }
}

// Function to clear input fields
function clearInputs() {
    username.value = "";
    homePlace.value = "";
    course.value = "";
}

// Click event for the "Submit" button
myBtn.onclick = function () {
    let enteredUsername = username.value.trim();
    let enteredHomePlace = homePlace.value.trim();
    let enteredCourse = course.value.trim();

    if (enteredUsername === "" || enteredHomePlace === "" || enteredCourse === "") {
        window.alert("Please enter all the required credentials to proceed!");
        return;
    }

    let newUser = new User(enteredUsername, enteredHomePlace, enteredCourse);

    // Show user details inside the container
    mainPara.textContent = `Thank you for registering, ${newUser.username}! 
    It's great knowing you are from ${newUser.homePlace}. 
    Wow, I really like ${newUser.course}! All the best in your future career.`;

    // **Show user count in window.alert each time a new user registers**
    window.alert(`\nCurrently, we have ${User.userCount} user${User.userCount > 1 ? "s" : ""} in our registration record.`);

    // Hide the submit button, show the next button
    myBtn.style.display = "none";
    nextBtn.style.display = "block";

    let maxUsers = 3;
    
    while (User.userCount >= maxUsers) {
        let userList = "Registered Users:\n";
        User.users.forEach((user, index) => {
            userList += `${index + 1}. ${user.username} from ${user.homePlace}, studying ${user.course} at Kisii University\n`;
        });

        window.alert(userList);
        window.alert("The registration portal is now closed. No more users can log in!");

        // Disable form when max users are reached
        myBtn.disabled = true;
        nextBtn.disabled = true;
        username.disabled = true;
        homePlace.disabled = true;
        course.disabled = true;

        break; // Break out of the loop
    }
};

// Click event for the "Next" button
nextBtn.onclick = function () {
    clearInputs(); // Clear previous user input
    mainPara.textContent = ""; // Clear displayed message
    myBtn.style.display = "block"; // Show submit button
    nextBtn.style.display = "none"; // Hide next button
};
