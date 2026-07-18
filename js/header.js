const header = document.querySelector("header");


const logoCard = document.createElement('div');
logoCard.className = "logo";
const logoText = document.createTextNode('Logo');
logoCard.appendChild(logoText);
header.insertBefore(logoCard, header.firstChild);

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
    const nav = document.querySelector("ul");

openBtn.addEventListener("click", ()=> {
    nav.classList.add("show"); 

    openBtn.classList.remove("active");
    closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", ()=> {
     nav.classList.remove("show"); 

     openBtn.classList.add("active");
     closeBtn.classList.remove("active");

});