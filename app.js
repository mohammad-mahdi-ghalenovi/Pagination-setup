let names = [
  "metti",
  "ali",
  "akbar",

  "soghra",
  "khodet",
  "amat",

  "babat",
  "amat",
  "hossein",

  "nmishnasam",
  "1",
  "2",

  "3",
  "4",
];
let menuContainer = document.querySelector(".menu-container");
let btnContainer = document.querySelector(".btn-container");

let rowCount = 3;        // you can change count of rows 
let currentPage = 1;   
let startIndex;
let endIndex;

function paginationSetup(currentPage) {
  menuContainer.innerHTML = "";

  endIndex = rowCount * currentPage;
  startIndex = endIndex - rowCount;

  let slicedArray = names.slice(startIndex, endIndex);
  slicedArray.forEach(function (name) {
    menuContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="table-item">' + name + "</div>"
    );
  });
}

function buttonSetupHandler() {
  let pageCount = Math.ceil(names.length / rowCount);

  for (let i = 0; i < pageCount; i++) {
    let newButton = document.createElement("button");

    newButtonHandler(newButton, i);
  }
}

function newButtonHandler(newButton, i) {
  btnContainer.append(newButton);
  newButton.textContent = i + 1;

  if (currentPage === i + 1) {
    newButton.classList.add("active");
  }

  newButton.addEventListener("click", function () {
    currentPage = i + 1;
    document.querySelector(".active").classList.remove("active");

    newButton.classList.add("active");

    paginationSetup(currentPage);
  });
}

buttonSetupHandler();
paginationSetup(currentPage);
