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
  if (item == "" ||  item == " ") {
    return(false);
  }
  else {
  $(".list").append("<li><input type='button' class='checkitem' value='&#x2713;'/>" + item + "<input type='button' class='removeitem' value='&#x2715;'/><span id='sortitems'>&#8597;</span></li>");
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
$(".list").sortable({axis: "y", containment: ".list", revert: true, scroll: true, scrollspeed: 40, tolerance: "pointer",
  //Control width of item when being sorted
  start: function(event, ui) {
  $(ui.item).width($(".listcontainer").width());
  $("#newitem").focus();
  }});


});