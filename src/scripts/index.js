import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const setData = (data) => {
    let content = document.getElementById("showContent");
    let tabIndex = 6;
    data.restaurants.forEach(elm => {
        // console.log(elm);
        content.innerHTML += `
            <div class="column"  tabindex="${tabIndex}">
                <div class="card">
                    <div class="card-img">
                        <img src="${elm.pictureId}" class="img-thumbnails responsive">
                    </div>
                    <h5 style="font-size: 16px;">${elm.name}</h5>
                    <p class="description">${maxCharacter(elm.description)}</p>
                    <div class="card-bottom">
                        <div>Rating: ${elm.rating}</div>
                        <div>${elm.city}</div>
                    </div>
                </div>
            </div>
        `;
        tabIndex++;
    });
}

const maxCharacter = (character) => {
    return character.substring(0, 150);
};

setData(data);