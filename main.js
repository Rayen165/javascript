const button = document.querySelector("button")
const input= document.querySelector("input")
const cont=document.getElementById("cont")
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

