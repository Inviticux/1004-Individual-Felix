//the buttons
const postbutton = document.querySelector(".textformbutton");
const likebutton = document.querySelector(".likebutton");
const dislikebutton = document.querySelector(".dislikebutton");
const keepbutton = document.querySelector(".keepbutton");

//likes dislikes
let likes = 0;
let dislikes = 0;

//other elements
const labelText = document.querySelector(".textpost-form label");
const texttoreplace = document.querySelector(".textofpost");
const textarea = document.querySelector('textpost');

postbutton.addEventListener("click", function () {
    labelText.innerHTML = "Submitted";
    const textareatext = document.getElementById("textpost").value;
    texttoreplace.innerHTML = textareatext;
    textarea.value = "";
})

likebutton.addEventListener("click", function () {
    likes = likes + 1;
    likebutton.innerHTML = "Likes: " + likes;
})

dislikebutton.addEventListener("click", function () {
    dislikes = dislikes + 1;
    dislikebutton.innerHTML = "Dislikes: " + dislikes;
})

keepbutton.addEventListener("click", function () {
    keepbutton.innerHTML = "Commented";
})