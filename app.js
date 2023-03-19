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

let rowCount = 3;
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
      '<div class="test-item">' + name + "</div>"
    );
  });
}

paginationSetup(currentPage);
