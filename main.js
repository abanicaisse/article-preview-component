const shareBtn = document.querySelector(".share-btn");
const shareSection = document.querySelector(".description__share");

shareBtn.addEventListener("click", showOptions);

function showOptions(e){
    const shareOptions = document.querySelector(".share-options");
    //define the share box we want for mobile and tablets
    if (window.innerWidth < 1000) {
        const clientDetail = document.querySelector(".client-info");
    
        shareOptions.classList.toggle("mobile-share");
        //style the box accordingly to the design
        shareSection.classList.toggle("description__share--active")

        if (clientDetail.style.display === "none") {
            clientDetail.style.display = "flex";
        } else {
            clientDetail.style.display = "none";
        }
        //If the desktop sharing box has been activated previously we deactivate it
        shareOptions.classList.remove("desktop-share");
    } else {
        shareOptions.classList.toggle("desktop-share");
        const clientDetail = document.querySelector(".client-info"); clientDetail.style.display = "flex";

        //If the mobile sharing box has been activated previously we deactivate and also remove all its stylings
        shareOptions.classList.remove("mobile-share");
        shareSection.classList.remove("description__share--active");
    }
}