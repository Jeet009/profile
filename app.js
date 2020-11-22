const card = document.querySelector(".card-c");
const container = document.querySelector(".container-c");

const title = document.querySelector(".title");
const bio = document.querySelector(".bio");
const desc = document.querySelector(".desc");
const image = document.querySelector(".photo img");
const circle = document.querySelector(".photo .circle");
const social = document.querySelector(".socialIcon");
const button = document.querySelector(".subscribe");
const buttonOutlined = document.querySelector(".subscribe-outlined");
const floatingButton = document.querySelector(".floating-button");

container.addEventListener("mousemove", (e) => {
  console.log(e.innerHeight);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transition = "none";
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "all 0.5s ease";
  title.style.transform = "translateZ(150px)";
  bio.style.transform = "translateZ(150px)";
  desc.style.transform = "translateZ(150px)";
  image.style.transform = "translateZ(100px)";
  circle.style.transform = "translateZ(5px)";
  social.style.transform = "translateZ(90px)";
  button.style.transform = "translateZ(50px)";
  buttonOutlined.style.transform = "translateZ(50px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "none";
  bio.style.transform = "none";
  desc.style.transform = "none";
  image.style.transform = "none";
  circle.style.transform = "none";
  social.style.transform = "none";
  button.style.transform = "none";
  buttonOutlined.style.transform = "none";
});

//Mobile Browser Event

container.addEventListener("touchmove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.touches[0].pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.touches[0].pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("touchstart", (e) => {
  card.style.transition = "none";
  image.style.transform = "translateZ(100px)";
  circle.style.transform = "translateZ(5px)";
});

container.addEventListener("touchend", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  image.style.transform = "none";
  circle.style.transform = "none";
});

container.addEventListener("click", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  image.style.transform = "none";
  circle.style.transform = "none";
  title.style.transform = "none";
  bio.style.transform = "none";
  desc.style.transform = "none";
  social.style.transform = "none";
  button.style.transform = "none";
  buttonOutlined.style.transform = "none";
});
