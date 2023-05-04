// import { linkedPages } from "./linkedPages.js";
const pages = () => {
  /// array of horse html pages
  const horsePageArray = [
    { page: "horse2020", year: 2020 },
    { page: "horse2021", year: 2021 },
    { page: "horse2022", year: 2022 },
    { page: "horse2025", year: 2025 },
    { page: "horse2030", year: 2030 },
    { page: "horse2035", year: 2035 },
    { page: "horse2040", year: 2040 },
    { page: "horse2045", year: 2045 },
  ];

  console.table(horsePageArray);

  const divNav = document.querySelector(".divNav");
  console.log(divNav);
  divNav.innerHTML = "<nav><ul class='unorderedlist mainMenu'>";

  const unorderedlist = document.querySelector(".unorderedlist");
  console.log(unorderedlist);

  for (let key in horsePageArray) {
    const createLi = document.createElement("li");
    const createTag = document.createElement("a");
    createLi.appendChild(createTag);
    unorderedlist.appendChild(createLi);
    createTag.href = `${horsePageArray[key].page}.html`;
    createTag.target = "_blank";
    createTag.innerText = `${horsePageArray[key].year}`;
  }
};

pages();
