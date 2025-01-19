const menubar = document.querySelector(".menu-bar1");
const bar = document.getElementById("bar");
const times = document.getElementById("times");

// Function to toggle visibility
bar.onclick = function () {
    if (menubar.style.visibility === "visible") {
        menubar.style.visibility = "hidden";
    } else {
        menubar.style.visibility = "visible";
    }
};

// Close button functionality
times.onclick = function () {
    menubar.style.visibility = "hidden";
};

menubar.onclick = function select(){
    menubar.style.visibility = "hidden";
}



bar.addEventListener("mouseover",event=>{
    event.target.style.color = "brown"
    event.target.style.fontSize = "24px"
})

bar.addEventListener("mouseout",event=>{
    event.target.style.color = "white"
    event.target.style.fontSize = "20px"

});
bar.onclick = function () {
    if (menubar.classList.contains("show")) {
        menubar.classList.remove("show");
        menubar.classList.add("hide");
    } else {
        menubar.classList.remove("hide");
        menubar.classList.add("show");
    }
};


