let body = document.body;

// function buttonOn() {
//   var element = document.getElementById("lineandcard");
//   element.classList.toggle("carddrop");
// }

function buttonOn() {
  var button = document.querySelector(".button");
  var card = document.getElementById("card"); 
  var front = document.getElementById("postcardfront"); 

  button.classList.toggle("buttonOn"); 

  if (button.classList.contains("buttonOn")) {
    button.innerHTML = '<img src="imgs/postopening.png">';
    front.style.display = 'block';
    // card.classList.remove('nocard');
    card.classList.add('carddrop');
  } else {
    button.innerHTML = 'post output';
    card.classList.remove('carddrop');
    // card.classList.add('nocard');
    front.style.display = 'none';
  }
}

// function envelopeOn() {
//   var button = document.querySelector(".envelope");

//   button.classList.toggle("envelopeOn"); 

//   if (button.classList.contains("envelope")) {
//     // button.innerHTML = '<img src="imgs/envelope">';
//     envelopeOn.style.display = 'envelope';
//     // card.classList.remove('nocard');
//     // card.classList.add('carddrop');
//   } else {
//     envelopeOn.style.display = 'envelopeopen';
//   }
// }

// old code that toggled button on and off but wouldn't change image back:
// let button = document.querySelector(".button");
// button.addEventListener("click", buttonOn);

// function buttonOn() {
//   body.classList.toggle("button");
//   button.classList.toggle("buttonOn");
    
//     if (buttonOn) {
//       button.innerHTML = '<img src="imgs/postopening.png">'; 
//       card.classList.remove('lineandcard');
//       card.classList.add('carddrop');
//     } else {
//       button.innerHTML = 'post output'; 
//       card.classList.remove('carddrop');
//       card.classList.add('lineandcard');
//   }
// }

// let navElement = document.querySelector(".nav")
// navElement.classList.add("nav carddrop");

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


