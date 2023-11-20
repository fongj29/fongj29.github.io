let body = document.body;

// function buttonOn() {
//   var element = document.getElementById("lineandcard");
//   element.classList.toggle("carddrop");
// }

function buttonOn() {
  body.classList.toggle("button");
  button.classList.toggle("buttonOn");
  // line.classList.toggle("carddrop");
    
    if (buttonOn) {
      button.innerHTML = '<img src="imgs/postopening.png">'; 
      card.classList = ("carddrop");
    } else {
      button.innerHTML = 'post output'; 
      card.classList = ("lineandcard");
  }
}
// how do i make the button return to normal (without image) when clicked again?



  // function buttonOn() {
  //   button.classList.toggle("buttonOn");
  //   line.classList.toggle("carddrop");
      
  //     if (buttonOn) {
  //       button.innerHTML = '<img src="imgs/postopening.png">'; 
  //       line.classList = ("carddrop");
  //     } else {
  //       button.innerHTML = 'post output'; 
  //       // how do i make the button return to normal (without image) when clicked again?
  //   }

//     if (buttonOn) + (button.innerHTML = '<img src="imgs/postopening.png">'); {
//       button.innerHTML = 'test off'; 
//     } else {
//         button.innerHTML = 'post output'; 
// } This would change to test off rather than image and not be able to change back


// function buttonOn() {
//   lineandcard.classList.toggle("carddrop");

//   if (buttonOn) {
//     line.classList.toggle("carddrop"); 
//   } else {
//     line.classList.toggle("lineandcard"); 
//     // how do i make the button return to normal (without image) when clicked again?
// }
// }

let button = document.querySelector(".button");
button.addEventListener("click", buttonOn);

