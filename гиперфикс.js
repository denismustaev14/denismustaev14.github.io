const btnNO = document.querySelector(".btn-no-runaway");

btnNO.addEventListener("click", function () {
  const maxX = window.innerWidth - btnNO.offsetWidth;
  const maxY = window.innerHeight - btnNO.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  const rect = btnNO.getBoundingClientRect();
  const currentX = rect.left;
  const currentY = rect.top;

  btnNO.style.left = currentX + "px";
  btnNO.style.top = currentY + "px";
  btnNO.style.position = "fixed";
  btnNO.style.left = currentX + "px";
  btnNO.style.top = currentY + "px";
  btnNO.style.left = randomX + "px";
  btnNO.style.top = randomY + "px";
});

const btnTest = document.querySelectorAll(".btn_test")
const btnYES = document.querySelector(".btn-yes");
const btnNext = document.querySelector(".btn_next");
const btnNextTwo = document.querySelector(".btn_next-2")
const actOne = document.querySelector(".screen-1");
const actTwo = document.querySelector(".screen-2");
const actThree = document.querySelector(".screen-3");
const actFour = document.querySelector(".screen-4");
const actFive = document.querySelector(".screen-5");

btnYES.addEventListener("click", function () {
    actOne.classList.remove('active')
    actTwo.classList.add('active')
})

btnNext.addEventListener("click", function () {
    actTwo.classList.remove('active')
    actThree.classList.add('active')
})

btnNextTwo.addEventListener("click", function () {
    actThree.classList.remove('active')
    actFour.classList.add('active')
})

btnTest.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.add('clicked')
    });
});

