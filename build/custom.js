let drop = document.getElementById("dropdown")
let hamShow = document.getElementById("hambuger-show")
let hamHide= document.getElementById("hambuger-hide")

hamShow.addEventListener("click" , function(event){
    hamShow.classList.add("hidden")
    hamHide.classList.remove("hidden")
    drop.classList.remove("hidden")
    drop.classList.add("lg:hidden")
})

hamHide.addEventListener("click", function(){
    hamHide.classList.add("hidden")
    hamShow.classList.remove("hidden")
    drop.classList.add("hidden")
})

