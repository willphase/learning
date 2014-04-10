var evenNumSum = 2
var num1 = 1
var num2 = 2
for (num3 = 3; num3 < 4000000; num3 = num1 + num2 ) {
    if (num3 % 2 === 0){
        var evenNumSum = evenNumSum + num3;
    }
    num1 = num2;
    num2 = num3;
    }