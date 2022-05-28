const colors =["green", "red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    const ramdomNumer = getRandomNumber;
    document.body.style.background =colors[ramdomNumer];
    color.textContent = colors[ramdomNumer];

    document.body.style.background = colors[ramdomNumer];
    color.textContent = colors[ramdomNumer];
});

function getRandomNumber(){
    return Math.random()*colors.length;
}