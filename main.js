let hearcount = 0
sum= 0
hearticons = document.getElementsByClassName("fa-heart")
heartDisplay = document.getElementById("heartdisplay")


for(let icon of hearticons){
    icon.addEventListener("click",function(){
        hearcount++
        heartDisplay.innerText= hearcount
    })
}