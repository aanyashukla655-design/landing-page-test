// mobile nav toggle (basic)
let toggleBtn = document.getElementById("toggleBtn");
let navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
    if(navMenu.style.display === "flex"){
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
});
