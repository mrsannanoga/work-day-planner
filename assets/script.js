//Set today's date displayed in header
function updateNow() {

var now = moment();
$("#currentDay").text(now.format("dddd, D MMMM YYYY, h:mm:ss a"));

};

setInterval(updateNow);

