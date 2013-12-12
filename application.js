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
$(".addedlist").delegate("li", "click", function(e) {
  $(this).addClass("strikethrough");
});

//Delete removed item
$(".removedlist li").click(function() {
  $(this).remove();
});


});