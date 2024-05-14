// const audio = document.getElementById("myAudio");
// const displayText = document.getElementById("displayText");

// audio.addEventListener("play", function() {
//     displayText.style.display = "block";
// });

// audio.addEventListener("pause", function() {
//     displayText.style.display = "none";
// });

const audioElements = document.querySelectorAll(".myAudio");
const displayTextElements = document.querySelectorAll(".displayText");

audioElements.forEach(function(audio, index) {
    audio.addEventListener("play", function() {
        displayTextElements[index].style.display = "block";
    });

    audio.addEventListener("pause", function() {
        displayTextElements[index].style.display = "none";
    });
});

// Get the image element
const randomButton = document.getElementById("randomButton");

// Function to redirect to a random page
function redirectToRandomPage() {
  // Define an array of relative URLs
  const pages = [
    "https://fongj29.github.io/InteractionStudio/TextandImage/page1.html",
    "https://fongj29.github.io/InteractionStudio/TextandImage/page2.html",
    "https://fongj29.github.io/InteractionStudio/TextandImage/page3.html"
  ];
  
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * pages.length);
  // Get the random page
  const randomPage = pages[randomIndex];
  // Redirect the user to the random page
  window.location.href = randomPage;
}

// Add click event listener to the image
randomButton.addEventListener("click", redirectToRandomPage);

// Define an array of relative URLs
const pages = [
    "https://fongj29.github.io/InteractionStudio/TextandImage/page1.html",
    "https://fongj29.github.io/InteractionStudio/TextandImage/page2.html",
    "https://fongj29.github.io/InteractionStudio/TextandImage/page3.html",
  ];
  
  // Function to redirect to a random page
  function redirectToRandomPage() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    let randomPage;
  
// Determine the random page based on probability
if (randomNumber < 0.92) {
  // 92% chance for the first link
  randomPage = pages[0];
} else if (randomNumber < 0.96) {
  // 4% chance for the second link
  randomPage = pages[1];
} else {
  // 4% chance for the third link
  randomPage = pages[2];
}
  
    // Redirect the user to the random page
    window.location.href = randomPage;
  }
  
  // Add click event listener to the button
  document.getElementById("randomButton").addEventListener("click", redirectToRandomPage);
  
//   function toggleHiddenClouds() {
//     var hiddenImage = document.getElementById("hidden-image");
//     if (hiddenImage.style.opacity === "0" || hiddenImage.style.opacity === "") {
//         hiddenImage.style.opacity = "1";
//     } else {
//         hiddenImage.style.opacity = "0";
//     }
// }

function toggleOpacity() {
  var hiddenImage = document.getElementById("hidden-image");
  if (hiddenImage.style.opacity === "0" || hiddenImage.style.opacity === "") {
      hiddenImage.style.opacity = "1";
  } else {
      hiddenImage.style.opacity = "0";
  }
}
