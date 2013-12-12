$(document).ready(function() {


var item;

//Input with enter key
$("#newitem").keyup(function(e) {
  if (e.which == 13) {
    e.preventDefault();
    addItem();
  }
});

//Add item
function addItem() {
  var item = document.getElementById("newitem").value;
  $(".addedlist").append("<li>" + item + "</li>");
  $("#newitem").val("");
  $("#newitem").focus();
}

//Strike through added item
$(".addedlist").on("click", "li", function(e) {
  $(this).addClass("strikethrough");
});

//Move added item to removed item list
$(".addedlist").on("dblclick", "li", function(e) {
  $(this).removeClass("strikethrough").appendTo(".removedlist");
});

//Delete removed item
$(".removedlist").on("dblclick", "li", function(e) {
  $(this).fadeOut("slow");
});

//Added items sortable
$(".addedlist").sortable();

//Removed items draggable back to added items list
$( ".addedlist ul" ).droppable();
$( ".removedlist li" ).draggable({ connectToSortable: ".addedlist" });


});