let discoBulb = document.querySelector('i')
let color = ['blue', 'red', 'yellow']

for (let i = 0; i < color.length; i++) {
    console.log(color[i])
}

function discoSwitch() {
    console.log('clicked')
    if (discoBulb.style.backgroundColor.match('black')) {
        discoBulb.style.backgroundColor = color[0]
    } else {
        discoBulb.style.backgroundColor = 'black'
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
