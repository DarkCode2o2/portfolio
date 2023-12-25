// Select Items 
line = document.getElementById('line');
barsBtn = document.querySelector('header .nav i')
navigation = document.querySelector('header .nav ul')


// get height of page 
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

// Set Width Of Line

window.addEventListener('scroll', () => {

    // Set Scorll Top Width 

    let scrollTop = document.documentElement.scrollTop

    line.style.width = `${(scrollTop / height) * 100}%`
})


// Open Navbar When Button is Clicked 

barsBtn.addEventListener('click', () => {
    navigation.classList.toggle('hide')
    if(navigation.classList.contains('hide')) {
        barsBtn.style.transform = 'rotate(360deg)'
        barsBtn.className = 'fa-solid fa-xmark'
    }else {
        barsBtn.style.transform = 'rotate(0deg)'
        barsBtn.className = 'fa-solid fa-bars-staggered'
    }
})



var typed = new Typed('.element', {
    strings: ['Frontend Developer.', 'Problem Solver.', 'Obsessed with website design.'],
    typeSpeed: 100,
    loop: true,
    showCursor: false,
});