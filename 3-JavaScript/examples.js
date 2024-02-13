var count = 5;
var message =  "Hello, World!";

function my_function () {
    for (var i = 0; i < count; i++) {
        console.log(message);

    } 
    for( var num=0; num<=5; num++ ) {
        console.log(num);}
}

my_function();

function my_function2 (startnum,endnum){
    var num = startnum;
    var num2= endnum;
    for (num; num>=num2; num--) {
        console.log(num);
    } 
}

my_function2(10,-3);

function my_function3 (number){
    var num = number;
    var array = [];
    for (var i = 0; i<=num; i++ ){
        array.push(i);
    }
    return array;
}

y = my_function3(5);
console.log(y);