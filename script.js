console.log("Hello World");

function first() {
    setTimeout(() => {
        console.log("Clicked");
        operation();
        Result();
    }, 1000);
}
let btns = document.getElementById('btn');
btns.addEventListener("click", first);

var wordCount;

function operation() {
    let count = 0;
    let operate = document.getElementById('input');
    wordCount = operate.value.trim() === "" ? 0 : operate.value.trim().split(/\s+/).length;
    for (let i = 0; i < operate.value.length; i++) {
        if (operate.value[i] != " ") {
            count = count + 1;
        }
    }
    console.log("Total Characters:", count);
    console.log("Total Words:", wordCount);
    console.log("Length of sentence", operate.value.length);
}

function Result(){
    console.log("Result is calculated...");
    
    let span = document.querySelector(".span").innerHTML = wordCount;
    let res = document.querySelectorAll(".result");
    res.forEach(element => {  
        element.classList.toggle("result"); 
    });
}