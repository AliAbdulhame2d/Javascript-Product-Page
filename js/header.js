const header = document.querySelector("header");


const logoCard = document.createElement('div');
logoCard.className = "logo";
const logoText = document.createTextNode('Logo');
logoCard.appendChild(logoText);
header.insertBefore(logoCard, header.firstChild);
