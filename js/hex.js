const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C","D","E","F"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
btn.addEventListener("click", function () {
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = randomColor
    color.textContent = randomColor
})

function getRandomColor() {
   let hexCode = "#"
   for(let i = 0 ; i < 6; i++) {
       hexCode = hexCode+ hex[getRandomNumber()]
   }
   return hexCode
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}



