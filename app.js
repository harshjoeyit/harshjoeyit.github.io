
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



// Change Text


const changeText = document.querySelector('.changeText');
const words = ['Build Websites', 'Play Basketball', 'Read Books']
const showCharTime = 120;
const waitBeforeErase = 500;
const wordPauseTime = 1200;

const setAsyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
    setTimeout(() => {
        cb();
        resolve();
    }, timeout);
})

const printWord = async (word) => {
    for(let i=0; i<word.length; i++) {
        await setAsyncTimeout(() => {
            changeText.innerText = word.substr(0, i+1);
        }, showCharTime)
    }
}

const eraseWord = async (word) => {
    const len = word.length;
    for(let i=0; i<=word.length; i++) {
        await setAsyncTimeout(() => {
            changeText.innerText = word.substr(0, len-i);
        }, showCharTime)
    }
}

const doStuffAsync = async (word) => {
    await setAsyncTimeout(() => {
        printWord(word)
    }, word.length * showCharTime);

    await setAsyncTimeout(() => {

    }, waitBeforeErase);

    await setAsyncTimeout(() => {
        eraseWord(word)
    }, word.length * showCharTime);
}

const fireUpChangeText = async () => {
    let timeout = 0;
    
    for(let i=0; i<words.length; i++) {    
        await setAsyncTimeout(() => {
            doStuffAsync(words[i])
        }, timeout);
        
        timeout = 2 * showCharTime * words[i].length + wordPauseTime;
    }
}

const getExpectedTime = () => {
    let totalLen = words.reduce((total, curr) => 
        total += curr.length
    , 0)
    return totalLen * 2 * showCharTime + words.length * wordPauseTime;
}

fireUpChangeText()

setInterval(() => {
    fireUpChangeText()
}, getExpectedTime())
