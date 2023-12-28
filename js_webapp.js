
let count = 0
let old = 0
let ta = document.getElementById("h1_count");

function onbutton(){
    console.log(count);
    
    
    count += 1;
    ta.innerText = count;
    console.log(ta);

}

function onSave(){
    let para1 = document.getElementById("para-el")
    console.log(para1)
    para1.textContent += count + " - ";
    old += count;
    count = 0
    ta.innerText = count;
}

var btn_inc = document.getElementById("btn")