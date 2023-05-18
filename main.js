let date = new Date();
let element = document.querySelector(".date");
let skills = document.querySelectorAll(".bar span");
let header = document.querySelector("#navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul li a");
let menu = document.querySelector("#menu-icon");
let nav = document.querySelector("nav ul");
let progress = document.querySelectorAll(".skills-content .progress .bar span");
element.innerHTML = `&copy;<span class="name">Mahmoud</span> ${date.getFullYear()} All Right Reserved `;
window.onscroll = () => {
    header.classList.toggle("sticky", window.scrollY > 100);
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            if (id === "skills") {
                progress.forEach((prog) => {
                    prog.style.position = "absolute";
                });
            }
            navlinks.forEach((link) => {
                link.classList.remove("active");
                console.log(link);
                document
                    .querySelector("nav ul li a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
    menu.classList.remove("fa-xmark");
    nav.classList.remove("show");
};
menu.onclick = () => {
    menu.classList.toggle("fa-xmark");
    nav.classList.toggle("show");
};
