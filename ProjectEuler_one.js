var numSum = 0
for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        var numSum = numSum + i;
    }
}

// things to put into jsfiddle to get it to print
//additional JS
document.getElementById('text').innerHTML = numSum;

//HTML
<div id="text"></div>