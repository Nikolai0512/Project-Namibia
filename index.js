let catchEl = document.getElementById("catch-el")
let countEl = document.getElementById("count-el")
let count = 0
let countStr = 0

function countkudus() {
    count += 1
    
    countEl.textContent = count
}

function catchkudu() {
    countStr = count + countStr
    catchEl.textContent = countStr
    countEl.textContent = 0
    count = 0
}

function runkudus() {
    count = 0
    countStr = 0
    countEl.textContent = 0
    catchEl.textContent = 0
}