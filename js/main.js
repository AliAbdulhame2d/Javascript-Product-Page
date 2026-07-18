
const main = document.querySelector("main");

//The main content
const contentCard = document.createElement("div");
contentCard.className = "content";

//Create Products
function createProducts(count) {
    for (let i=1; i<= count; i++) {

    //Product card
    const productCard = document.createElement("div");
    productCard.className = "product";

    //Product number
    const numberContainer = document.createElement("span");
    const productNumber = document.createTextNode(i);
    numberContainer.appendChild(productNumber);
    productCard.appendChild(numberContainer);

    //Product content
    const productContent = document.createElement("p");
    const productText = document.createTextNode("Product");
    productContent.appendChild(productText);
    productCard.appendChild(productContent);

    productCard.addEventListener("mouseenter", () => { productCard.style.transform = "scale(1.07)";});
    productCard.addEventListener("mouseleave", () => { productCard.style.transform = "scale(1)";});

    contentCard.appendChild(productCard);

    }
}
createProducts(12);
main.appendChild(contentCard);


//Dark Mode
function toggle (event) {
const container = document.querySelector(".container");
const darkButton = document.querySelector("button");
container.classList.toggle("dark");
darkButton.classList.toggle("dark");

}

//Show Products from dropdown list
function showProducts() {
    //Product select value
    const value = document.querySelector("select").value;
    contentCard.innerHTML = "";
    createProducts(value);
}