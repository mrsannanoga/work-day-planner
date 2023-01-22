//Set today's date displayed in header
function updateNow() {

var now = moment();
$("#currentDay").text(now.format("dddd, D MMMM YYYY, h:mm:ss a"));

};

setInterval(updateNow);

//set moment hours to 
//event delegation to buttons to save text in local storage
var saveButton = $(".saveBtn");

saveButton.on("click", function(){

    
    var time = $(this).siblings(".hour").text();
    var textValue = $(this).siblings(".description").val();
    
    var buttonIcon = $(this).children(".fa-unlock");

    localStorage.setItem(time, textValue);
    buttonIcon.removeClass("fa-unlock");
    buttonIcon.addClass("fa-lock");
   
});

//event listener added to saveButtonOn to unsave text in local storage
// saveButton.on("click", function(){
//     localStorage.clear;
//     textValue = "";
//     var buttonIcon2 = $(this).children(".fa-lock");
//     buttonIcon2.removeClass("fa-lock");
//     buttonIcon2.addClass("fa-unlock");
// });

// retrieve data saved in local storage

function retrieveData() {
    var rows = $(".row");
    rows.each(function () {
     
      var hour = $(this).find(".hour").text();
     
      var textValue = localStorage.getItem(hour);
  
      
      if (textValue) {
        $(this).find(".description").val(textValue);
      }
    });
};

//load data retrieving function when page loads
$(document).ready(function () {
    retrieveData();
  });
