const arrowButton__element = document.querySelector(".profile-arrow");
const profile__element = document.querySelector(".profile");
const profileContentIMG__element = document.querySelector(
    ".profile-content > img"
);

const profileContent__element = document.querySelector(".profile-content");
const profileContentSpan__element = document.querySelectorAll(".profile-content > span");

let open = false;

arrowButton__element.addEventListener("click", function (e) {
    if (!open) {
        profile__element.style =
            "transform: translateY(-50%) translateX(0rem);";
        this.style = "rotate: 360deg";

        profileContentIMG__element.style = "max-height: 400px";
        profileContent__element.style = "opacity: 1";

        profileContentSpan__element.forEach(element => {
            element.style = "max-height: 100px";
        });

        open = true;
    } else {
        profile__element.style =
            "transform: translateY(-50%) translateX(11rem);";
        this.style = "rotate: 180deg";
        profileContentIMG__element.style = "max-height: 0px";
        profileContent__element.style = "opacity: 0";

        profileContentSpan__element.forEach(element => {
            element.style = "max-height: 0px";
        });

        open = false;
    }
});
