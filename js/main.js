function changeled(ledNo){
    var sampleElem = document.getElementById("led"+ledNo);
    if (sampleElem.className === "led-red") {
        sampleElem.className = "led-yellow";
    } else {
        sampleElem.className = "led-red";
    }
}


