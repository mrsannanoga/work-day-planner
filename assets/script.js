//Set today's date displayed in header
function updateNow() {

var now = moment();
$("#currentDay").text(now.format("dddd, D MMMM YYYY, h:mm:ss a"));

};

setInterval(updateNow);

// create timeblock via javascript and jquery

// var timeblockContainer = $(".container");
// var div1 = $("<div>");
// var divInDiv = $("<div>");
// var textArea1 = $("<textarea>");
// var button1 = $("<button>");

// var row1 = timeblockContainer.append(div1);
// div1.append(divInDiv, textArea1, button1);
// row1.addId("9AM");
// row1.addClass("row", "time-div");

