let input = document.getElementById("input")
function appendNumber(num) {
    input.value = input.value + num
}

function backspace() {
    input.value = input.value.slice(0,-1)
}