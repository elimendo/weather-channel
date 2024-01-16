const cityForm = document.getElementById("cityForm")
cityForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const cityValue =cityForm.querySelector("input").value
    console.log(cityValue)
})