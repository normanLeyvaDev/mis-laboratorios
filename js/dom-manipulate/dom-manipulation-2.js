const createElement = document.createElement("div");
console.log(createElement);

createElement.setAttribute("id", "insert-p");
console.log(createElement);

const createElementP = document.createElement("p");
console.log(createElementP);

document.querySelector("body").appendChild(createElement);
document.querySelector("#insert-p").appendChild(createElementP);
console.log(createElement);
