
// Movement animations 

const card = document.querySelector('.card')
const container = document.querySelector('.container')
const title = document.querySelector('.title');
const pic = document.querySelector('.pic img')
const desc = document.querySelector('.info')
const circle = document.querySelector('.circle')


// Moving animations Event

container.addEventListener('mousemove', (e) => {
    let yAxis = (window.innerWidth / 2 - e.pageX) / 40;
    let xAxis = (window.innerHeight / 2 - e.pageY) / 40;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
})

// Animate In

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    // Popout
    title.style.transform = 'translateZ(80px)'
    pic.style.transform = 'translateZ(120px)'
    pic.style.opacity = '1'
    desc.style.transform = 'translateZ(70px)'
    social.style.transform = 'translateZ(70px)'
    circle.style.background = 'linear-gradient(to right, #f5454225, ##f54642bf);'
})

// Animate Out

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    // pop back in
    title.style.transform = 'translateZ(0)'
    pic.style.transform = 'translateZ(0) rotateZ(0)'
    pic.style.opacity = '0.85'
    desc.style.transform = 'translateZ(0)'
    social.style.transform = 'translateZ(0)'
})
