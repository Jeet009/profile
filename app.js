const card = document.querySelector('.card-c');
const container = document.querySelector('.container-c');

container.addEventListener('mousemove', (e) => {
    console.log(e.innerHeight)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none' 
})

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease' 
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
})

container.addEventListener('touchmove', (e) => {
    console.log(e.innerHeight)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('touchstart', (e) => {
  card.style.transition = 'none' 
})

container.addEventListener('touchend', (e) => {
    card.style.transition = 'all 0.5s ease' 
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
})