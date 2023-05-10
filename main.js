let date = new Date();
let element = document.querySelector(".date");
let skills = document.querySelectorAll(".bar span");
element.innerHTML = `&copy;<span class="name">Mahmoud</span> ${date.getFullYear()} All Right Reserved `;
window.onscroll = function() {
    addandremove();
};

function addandremove() {
    skills.forEach((sk) => {
        if (window.scrollY >= 500) {
            sk.classList.add("this");
            console.log(element);
        } else {
            sk.classList.remove("this");
        }
    });
}