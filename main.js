const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
let btnList = document.querySelectorAll(".squares");


for (let i = 0; i < btnList.length; i++) {
  let btn = btnList[i];

  btn.addEventListener("click", function(e) {
      console.log(e.target.id);

      console.log(e.target.parent);
  });
}