const colors =["green", "red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    //console.log(document.body);
    const ramdomNumer = getRandomNumber();
    console.log(ramdomNumer);

    document.body.style.backgroundColor = colors[ramdomNumer];
    color.textContent = colors[ramdomNumer];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}