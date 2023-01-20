const btn = document.querySelector("button");

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}
console.log(generateRandomColor());

btn.addEventListener("mouseover", () => {
  console.log("mouse over me!");
  let randomLeft = Math.random() * window.innerWidth;
  let randomTop = Math.random() * window.innerWidth * 0.8;
  btn.style.left = `${randomLeft}px`;
  btn.style.top = `${randomTop}px`;

  document.body.style.backgroundColor = generateRandomColor();
});

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
