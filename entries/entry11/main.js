let body = document.body;

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
