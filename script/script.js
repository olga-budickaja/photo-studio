// Menu mobile
    const header = document.querySelector(".header");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener('click', () => {
        header.classList.toggle("active");
        hamburger.classList.toggle("close");
    });


// section About open text
const aboutButton = document.querySelectorAll(".about__item-button");
const aboutText = document.querySelectorAll(".about__item-text");


    for (let i = 0; i < aboutButton.length; i++) {
        aboutButton[i].addEventListener('click', (e) => {
            e.preventDefault();
            if (document.documentElement.clientWidth < 1200) {
                aboutText[i].classList.toggle("open");

                aboutText[i].addEventListener('click', () => {
                    aboutText[i].classList.remove("open");
                })
            }
        });

}
