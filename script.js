document.getElementById("colorines").addEventListener("click", colorAleatorio);

function colorAleatorio() {
    let digitoHexadecimal= "0123456789abcdef";
    let color = "";
    //console.log(digitoHexadecimal[Math.floor(Math.random() * 16)]);
        //Math.random() * 15;

    color = "#";
    for (let i=0; i<6; i++){
        color += digitoHexadecimal[Math.floor(Math.random() * 16)];
    }
    document.getElementById("colorines").style.backgroundColor = color;
    document.getElementById("textoColor").innerHTML = "Color: " + color;
    console.log(color);
}