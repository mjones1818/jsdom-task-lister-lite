document.addEventListener("DOMContentLoaded", () => {
  // your code here

});
let form = document.getElementById("create-task-form")
let description = document.getElementById('new-task-description')
let user = document.getElementById('new-task-user')
let submitButton = document.getElementById('submit-button')
let tasks = document.getElementById("tasks")

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  tasks.innerHTML += `<li data-storage="${description.value}">${description.value} User: ${user.value}  <button id='edit'>Edit</button> <button id='delete'>Delete</button></li>`
  description.value = ""
  user.value = ""
})


tasks.addEventListener('click', handleClick)

function handleClick (e) {
  console.log("this is the event", e.target)
  if (e.target.id == "delete") {
    e.target.parentElement.remove()
  }
  if (e.target.id == "edit"){
    let data = e.target.parentElement.getAttribute("data-storage")
    description.value = data
    e.target.parentElement.remove()
  }
}