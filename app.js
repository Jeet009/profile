const card = document.querySelector('.card-c');
const container = document.querySelector('.container-c');

const title = document.querySelector('.title')
const bio = document.querySelector('.bio')
const image = document.querySelector('.photo img')
const circle = document.querySelector('.photo .circle')
const social = document.querySelector('.socialIcon')
const button = document.querySelector('.subscribe')

container.addEventListener('mousemove', (e) => {
    console.log(e.innerHeight)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(150px)'
    bio.style.transform = 'translateZ(150px)'
    image.style.transform = 'translateZ(100px)'
    circle.style.transform = 'translateZ(5px)'
    social.style.transform = 'translateZ(90px)'
    button.style.transform = 'translateZ(50px)'
})

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease' 
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = 'translateZ(0px); '
    bio.style.transform = 'translateZ(0px); '
    image.style.transform = 'translateZ(0px); '
    circle.style.transform = 'translateZ(0px); '
    social.style.transform = 'translateZ(0px); '
    button.style.transform = 'translateZ(0px); '
})

//Mobile Browser Event

container.addEventListener('touchmove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.touches[0].pageX) / 30 ;
    let yAxis = (window.innerHeight / 2 - e.touches[0].pageY) / 30 ;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('touchstart', (e) => {
    card.style.transition = 'none' 
    title.style.transform = 'translateZ(150px)'
    bio.style.transform = 'translateZ(150px)'
    image.style.transform = 'translateZ(100px)'
    circle.style.transform = 'translateZ(5px)'
    social.style.transform = 'translateZ(90px)'
    button.style.transform = 'translateZ(50px)'
})

container.addEventListener('touchend', (e) => {
    card.style.transition = 'all 0.5s ease' 
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = 'translateZ(0px); '
    bio.style.transform = 'translateZ(0px); '
    image.style.transform = 'translateZ(0px); '
    circle.style.transform = 'translateZ(0px); '
    social.style.transform = 'translateZ(0px); '
    button.style.transform = 'translateZ(0px); '
})