let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");

//--------------------- Container ---------------------
//--- Container Html ---

//--- Container CSS ---
//.container {}
let container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.overflow = "hidden";
container.style.height = "100vh";
//--------------------- End Container ---------------------


//--------------------- Header ---------------------
//--- Header Html ---
let divLogo = document.createElement('div');
divLogo.className = "logo";
let logoText = document.createTextNode('Logo');
divLogo.appendChild(logoText);
header.insertBefore(divLogo, header.firstChild);

//--- Header CSS ---
//heder {}
header.style.padding = "20px";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

//header .logo {}
let logo = document.querySelector(".logo");
logo.style.color = "green";
logo.style.fontSize = "large";
logo.style.fontWeight = "bold";
logo.style.padding = "18px";
logo.style.border = "solid 1px";


//--------------------- End Header ---------------------



//--------------------- Main ---------------------
//--- Main Html ---
// <div class="content"></div>
let divContent = document.createElement("div");
divContent.className = "content";

// Create 12 Products
for (let i=1; i<= 12; i++) {

// <div class='product'></div>
let divProduct = document.createElement("div");
divProduct.className = "product";

// <span>i</span> :i is a counter
let span = document.createElement("span");
let spanText = document.createTextNode(i);
span.appendChild(spanText);
divProduct.appendChild(span);

// <p>Product</p>
let p = document.createElement("p");
let pText = document.createTextNode("Product");
p.appendChild(pText);
divProduct.appendChild(p);

divContent.appendChild(divProduct);

}

main.appendChild(divContent);

//--- Main CSS ---
//main {}
main.style.flex = "1";
main.style.overflow = "auto";

//main .content {}
divContent.style.display = "flex";
divContent.style.justifyContent = "center";
divContent.style.flexWrap = "wrap";
divContent.style.gap = "20px";

//main .content .product {}
let products = document.getElementsByClassName("product");
for (let product of products) {
    product.style.width = "400px";
    product.style.height = "100px";
    product.style.backgroundColor = "rgb(0 188 212 / 41%)";  
    product.style.display = "flex";
    product.style.flexDirection = "column";
    product.style.justifyContent = "center";
    product.style.alignItems = "center";
}
//--------------------- End Main ---------------------



//--------------------- Footer ---------------------
//--- Footer Html ---
let pFooter = document.createElement('p');
let pFooterText = document.createTextNode('Copyright 2026, Ali Abdulhameed');
pFooter.appendChild(pFooterText);
footer.appendChild(pFooter);


//--- Footer CSS ---
//footer {}
footer.style.height = "50px";
footer.style.backgroundColor = "green";
footer.style.display = "flex";
footer.style.alignItems = "center";

//footer p {} :The Paragraph in the Footer
pFooter.style.color = "white";
pFooter.style.marginLeft = "auto";
pFooter.style.marginRight = "auto";
//--------------------- End Footer ---------------------
