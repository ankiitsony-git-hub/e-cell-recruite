var text="A platform where students find freelance work and startups find skilled students."
var i=0

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i)

i++

setTimeout(typing,40)

}

}

typing()



var counters=document.querySelectorAll(".counter")

counters.forEach(function(counter){

var update=function(){

var target=+counter.getAttribute("data-target")
var count=+counter.innerText
var inc=target/100

if(count<target){

counter.innerText=Math.ceil(count+inc)

setTimeout(update,20)

}else{

counter.innerText=target

}

}

update()

})



var faq=document.querySelectorAll(".faq")

faq.forEach(function(item){

item.onclick=function(){

var ans=item.querySelector(".answer")

ans.style.display=ans.style.display==="block"?"none":"block"

}

})



var reveals=document.querySelectorAll(".reveal")

function reveal(){

for(var i=0;i<reveals.length;i++){

var windowHeight=window.innerHeight

var elementTop=reveals[i].getBoundingClientRect().top

if(elementTop<windowHeight-100){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll",reveal)



var form=document.getElementById("contactForm")

form.onsubmit=function(e){

e.preventDefault()

alert("Your message has been sent successfully.")

form.reset()

}