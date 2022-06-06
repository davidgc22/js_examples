function showTime() {
    var date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let sesion = "AM"
    if (h==0) {
        h=12;        
    }if (h>12) {
        h=h-12;
        sesion="PM"        
    }
    h=(h < 10) ? "0" + h : h;
    m=(m < 10) ? "0" + m : m;
    s=(s < 10) ? "0" + s : s;
    let time = h + ":" + m +":"+s+" "+sesion;
    
    document.getElementById("miReloj").innerText = time;
    document.getElementById("miReloj").textContent = time;
   
    setTimeout(showTime,1000);
}
showTime();