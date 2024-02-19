import data from "./data.json" assert { type: "json" };
const barsDiv = document.querySelector(".bars_div");
const date = new Date();
let day = date.getDay();

for (let index = 0; index < data.length; index++) {
  const div = document.createElement("div");
  const paraTag = document.createElement("p");
  const popOver = document.createElement("p");
  const spanTag = document.createElement("span");
  spanTag.innerHTML = data[index].day;
  popOver.innerHTML = "$" + data[index].amount;
  if (data[day - 1].day == spanTag.innerHTML) {
    paraTag.style.background = "hsl(186, 34%, 60%)";
  }

  paraTag.classList.add("day", index + 1);
  popOver.classList.add("pop_over");
  paraTag.id = index;
  paraTag.style.height = data[index].amount / 5 + "rem";
  div.insertAdjacentElement("afterbegin", paraTag);
  div.insertAdjacentElement("afterbegin", popOver);
  div.insertAdjacentElement("beforeend", spanTag);
  barsDiv.insertAdjacentElement("beforeend", div);
}
const paras = document.querySelectorAll(".day");
const pop = document.querySelectorAll(".pop_over");
const span = document.querySelectorAll("span");
paras.forEach((p) => {
  p.addEventListener("mouseover", (i) => {
    pop[p.id].classList.add("show");
    p.style.background = "hsl(10, 59%, 65%)";
    if (data[day - 1].day == span[p.id].innerHTML) {
      paras[p.id].style.background = "hsl(186, 54%, 60%)";
    }
  });
  p.addEventListener("mouseout", (i) => {
    pop[p.id].classList.remove("show");
    p.style.background = "hsl(10, 79%, 65%)";
    if (data[day - 1].day == span[p.id].innerHTML) {
      paras[p.id].style.background = "hsl(186, 34%, 60%)";
    }
  });
});
