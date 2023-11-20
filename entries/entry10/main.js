
let body = document.body;




function buttonOn() {
  body.classList.toggle("button");
  button.classList.toggle("buttonOn");
    
    if (buttonOn) {
      button.innerHTML = '<img src="imgs/postopening.png">'; 
    } else {
      button.innerHTML = 'post output'; 
      // how do i make the button return to normal (without image) when clicked again?
  }
//     if (buttonOn) + (button.innerHTML = '<img src="imgs/postopening.png">'); {
//       button.innerHTML = 'test off'; 
//     } else {
//         button.innerHTML = 'post output'; 
// } This would change to test off rather than image and not be able to change back
}

let button = document.querySelector(".button");
button.addEventListener("click", buttonOn);

