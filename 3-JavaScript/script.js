function my_function(element){
    alert("THis is another message");
    console.log("Element Clicked",element)
}

function turn_onoff(element){
    var onoff = element.innerText;
    if (onoff=="On"){
        element.innerText = "Off";
    }
    else{
        element.innerText = "On";
    }
    alert("On/Off Clicked");
}