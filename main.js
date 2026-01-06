const button = document.querySelector("button")
const input= document.querySelector("input")
const cont=document.getElementById("cont")
cont.style.border= "3px solid red"
cont.addEventListener("click", (eo) =>{
   if(eo.target.className == "icon-bin icon") {
    eo.target.parentElement.parentElement.remove()
   }
   else if(eo.target.className=="icon-angry icon"){
    eo.target.classList.add("dn");
    const heart =`<span class="icon-heart"></span>`

    eo.target.parentElement.parentElement.getElementsByClassName("text")[0].classList.add("finish");

   
    eo.target.parentElement.innerHTML+= heart
   }
})
//console.log(button)
button.addEventListener("click",(eo)=> {
    eo.preventDefault()
    const task = ` <div class="task">  

<span class="icon-star-full icon"></span>

<p> ${input.value} </p>
<div>

<span class="icon-bin icon"></span>
<span class="icon-angry icon"></span>
</div>

<!--<span class="icon-heart"></span>-->
    </div>
    `
    cont.innerHTML+=task

});

