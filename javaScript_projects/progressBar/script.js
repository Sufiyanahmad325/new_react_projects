const circles = document.querySelectorAll(".circle")
const progressBar = document.querySelector(".indicator")
buttons = document.querySelectorAll("button")

let currenctStep = 1
const updateSteps = (e) => {
    currenctStep = e.target.id === "next" ? ++currenctStep : --currenctStep

    circles.forEach((circle, index) => {
        circle.classList[`${index < currenctStep ? "add" : "remove"}`]("active")

    })

    let a = progressBar.style.width = `${((currenctStep - 1) / (circles.length - 1)) * 100}%`

    if (currenctStep > 1) {
        buttons[0].disabled = false
    } else{
        buttons[0].disabled = true
        
    }

    if(currenctStep<circles.length){
        buttons[1].disabled = false
    }else{
        buttons[1].disabled = true

    }


}


buttons.forEach((button) => {
    button.addEventListener("click", updateSteps)
});