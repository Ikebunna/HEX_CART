var chnager = document.getElementById("tochange");
var nbtn = document.getElementById("min");
var tot = document.getElementById("tt");
var chnager1 = document.getElementById("tochange1");
var nbtn1 = document.getElementById("min1");
var tot1 = document.getElementById("tt1");
var maintot = document.getElementById("total");
var total1= 400
var total2 = 700
var total3
var num= 1
function addOne() {
    num=num+1
    chnager.innerHTML= num
    total1 = num *400
    total3 = total1
    tot.innerHTML= `N${total1}`
    total()
    console.log("i am working")
    nbtn.style.cursor = 'pointer'
  

}

function subOne() {
    
    if (num!=1) {
        num=num-1
        chnager.innerHTML= num
        total1 = total1 - 400
        total3 = total1
        tot.innerHTML= `N${total1}`
        total()
        if(num ===1){
            nbtn.style.cursor = 'none'
        }
    }
    
}
function addOne1() {
    num=num+1
    chnager1.innerHTML= num
    total2 = num *700
    tot1.innerHTML= `N${total2}`
    total()
    console.log("i am working")
    nbtn1.style.cursor = 'pointer'
}

function subOne1() {
    
    if (num!=1) {
        num=num-1
        chnager1.innerHTML= num
        total2 = total2 - 700
        tot1.innerHTML= `N${total2}`
        total()
        if(num ===1){
            nbtn1.style.cursor = 'none'
        }
    }
    
}
function total() {
    maintot.innerHTML= total1 + total2
}
total()