let Donate = document.querySelector(".button-37")
let img = document.querySelector(".Donate-content")
let x = 0

function donate(){
    x++
    if(x%2 != 0){
        Donate.style.height="26rem"
        Donate.style.width="350px"
        img.style.display="block"
        
    }else{
        img.style.display="none"
        Donate.style.height="2.5rem"
        Donate.style.width="200px"
    }
}

