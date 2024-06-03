var editSide = document.getElementById("edit-side")
var editButton = document.getElementById("edit-button")
var editSaveButton = document.getElementById("editSaveButton")
var editCloseButton = document.getElementById("editCloseButton")

editButton.addEventListener("click", () => {
    editSide.style.display = "flex"
})

editCloseButton.addEventListener("click", () => {
    editSide.style.display = "none"
})