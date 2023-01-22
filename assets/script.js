//Set today's date displayed in header
function updateNow() {

var now = moment();
$("#currentDay").text(now.format("dddd, D MMMM YYYY, h:mm:ss a"));

};

setInterval(updateNow);

//event delegation to save button to save text in local storage
var saveButton = $(".saveBtn");
//var buttonIcon = $(".fas")

saveButton.on("click", function(){

    
    var time = $(this).siblings().attr("id");
    var textValue = $(this).siblings(".time-block").val();
    var buttonIcon = $(this).children(".fas");

    localStorage.setItem(time, textValue);
    buttonIcon.removeClass("fa-unlock");
    buttonIcon.addClass("fa-lock");
    
});