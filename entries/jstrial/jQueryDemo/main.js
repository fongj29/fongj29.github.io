// Step 1: Add an Alert
$(document).ready(function() {alert("[hello earthlings]"); })
// ^dollar signs means jquery

// Step 2: Make elements draggable
// this makes our ufo, cat, grapes and diamond interactive
$(document).ready(function() {$("#ufo").draggable(); })
$(document).ready(function() {$("#cat").draggable(); })
$(document).ready(function() {$("#grapes").draggable(); })
$(document).ready(function() {$("#diamond").draggable(); })

// Step 3: Make elements disappear on click
// this hides our UFO when we click on our bananas
// maybe you'd want to add text or an indicator that an element is clickable
$(document).ready(function() {
    $("#bananas").click(function(){
    $("#ufo").hide(); }); 
    })


// Step 4: Make elements disappear on hover
// this hides our UFO when we click on our bananas
// notice that the rest of our elements move
// $(document).ready(function() {
//     $("#ufo").hover(function(){
//     $(this).hide();
//      }); 
//     })


// Step 5: Append text on hover 
// Add text to the page when we mouse over an object
// $(document).ready(function()  {
//     $("#ufo").hover(function(){
//           $("#earthling").append(" we come in peach");
//            });
//     })


$(document).ready(function() {
    $("#ufo").hover(function(){
          $("#earthling").css("color", "red");
           });
    })