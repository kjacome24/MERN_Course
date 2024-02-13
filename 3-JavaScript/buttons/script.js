function example(element) {
    console.log(element.id);
    if (element.innerText == "On") {
        element.innerText = "Off";
    } else {
        element.innerText = "On";
    }

}