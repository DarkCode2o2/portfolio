// Select Items 
line = document.getElementById('line');


// get height of page 
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

// Set Width Of Line

window.addEventListener('scroll', () => {

    // Set Scorll Top Width 

    let scrollTop = document.documentElement.scrollTop

    line.style.width = `${(scrollTop / height) * 100}%`
})