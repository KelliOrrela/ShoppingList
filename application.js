$(document).ready(function() {


var item;


//Input item with enter key
$("#newitem").keyup(function(e) {
  if (e.which == 13) {
    e.preventDefault();
    addItem();
  }
});

//Put cursor focus on input field
$("#newitem").focus();

//Add item
function addItem() {
  var item = document.getElementById("newitem").value;
  //Prevent user from not entering any input or entering only space
  if (item == "" ||  item == " ") {
    return(false);
  }
  else {
  $(".list").append("<li><span id='sortitems'>&#8597;</span><input type='button' class='checkitem' value='&#x2713;'/>" + item + "<input type='button' class='removeitem' value='&#x2715;'/></li>");
  //Reset placeholder text and return focus to input field
  $("#newitem").val("");
  $("#newitem").focus();
  }
}

//Strike through item when checked
$(".list").on("click", ".checkitem", function(e) {
  $(this).closest("li").toggleClass("strikethroughtext");
  $("#newitem").focus();
});

//Remove item
$(".list").on("click", ".removeitem", function(e) {
  $(this).parent().css("color", "indianred").fadeOut(800);
  $("#newitem").focus();
});

//Make list items sortable
$(".list").sortable({axis: "y", containment: ".list", cursor: "move", revert: 250, scroll: true, scrollspeed: 20, tolerance: "pointer"});


});