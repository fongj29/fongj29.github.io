// Function to allow dropping elements
function allowDrop(ev) {
  ev.preventDefault();
}

// Function to handle drag start
function drag(ev) {
  var taskName = ev.target.querySelector(".egg-input").value;
  var taskTime = ev.target.querySelector(".yolk").value;
  ev.dataTransfer.setData("text", taskName + "|" + taskTime); // Store custom input values
}

// Function to handle dropping elements
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var [taskName, taskTime] = data.split("|"); // Retrieve custom input values
  var pot = document.getElementById("div1");
  var potRect = pot.getBoundingClientRect();

  // Check if the drop occurred within the pot's boundaries
  if (ev.clientX >= potRect.left && ev.clientX <= potRect.right &&
      ev.clientY >= potRect.top && ev.clientY <= potRect.bottom) {
      // Create a new egg element with custom input values
      var newEgg = document.createElement("div");
      newEgg.className = "egg";
      newEgg.innerHTML = `<input class="egg-input" type="text" name="taskName" value="${taskName}" readonly>
                          <input class="yolk" type="number" name="taskTime" value="${taskTime}" readonly>`;
      // Append the new egg element to the pot
      pot.appendChild(newEgg);
  } else {
      console.error("Drop occurred outside the pot boundaries!");
  }
}
