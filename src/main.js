let discoBulb = document.querySelector('i')
let i = 0;

function discoSwitch() {
    if (discoBulb.style.background == 'white') {
        setInterval(function() {
            let color = generateRandomColor();
            discoBulb.style.background = color
        }, 50)
    } else {
        discoBulb.style.background = 'black'
    }
}

discoBulb.addEventListener('click', discoSwitch)

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
console.log(generateRandomColor()); 
