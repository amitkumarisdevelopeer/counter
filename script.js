var decrement=document.querySelector("#decrement")
var reset=document.querySelector("#reset")
var increment=document.querySelector("#increment")
var title=document.querySelector("#title")
var zero=0
var h2=document.querySelector("h2")

increment.addEventListener("click",function(){
    zero++
    title.textContent=zero
    // title.style.color="blueviolet"
    h2.innerHTML="Increasing..."

    
})

decrement.addEventListener("click",function(){
    zero--
    title.textContent=zero
    h2.innerHTML="Decreasing..."
    // title.style.color="red"
})

reset.addEventListener("click",function(){
    zero=0
    title.textContent=zero
    h2.innerHTML="Neutral"
    // title.style.color="rgba(29, 239, 29, 0.823"
})