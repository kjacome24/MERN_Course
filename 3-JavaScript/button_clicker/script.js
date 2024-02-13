function loginbtn (element) {
    element.innerText = "LogOut";
}

function adddefinitionbtn (element) {
    element.remove();
}

var count = 0;
var count2 = 0;
function ninjalike(element) {
    alert("Ninja was liked");
    if (element.id=='btn3') {
        count++;
        if (count==1) {
            element.innerText = count + " like";
        } else {
            element.innerText = count + " likes";
        }
    } else {    
        count2++;
        if (count2==1) {
            element.innerText = count2 + " like";
        } else {                    
            element.innerText = count2 + " likes";
        }
    }

}