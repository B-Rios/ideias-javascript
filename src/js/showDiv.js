const divs = document.querySelectorAll(".child");
const divQuantity = document.querySelectorAll(".div-num");

const randomic = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

divQuantity.forEach((btn) => app(btn));

function app(btn) {
  btn.addEventListener("click", (e) => {
    const indexNumber = e.target.dataset.indexNumber;
    clearDivs();
    showDivs(indexNumber);
    // console.log(indexNumber);
  });
}

const clearDivs = () => {
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }
};

const showDivs = (data) => {
  for (let i = 0; i < data; i++) {
    const randomH = randomic(100, 300);
    const element = divs[i];
    element.style.display = "block";
    element.style.height = `${randomH}px`;
  }
};
