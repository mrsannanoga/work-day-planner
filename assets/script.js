//Set today's date displayed in header
function updateNow() {

    var now = moment();
    $("#currentDay").text(now.format("dddd, D MMMM YYYY, h:mm:ss a"));

};

setInterval(updateNow);

//set past, present and future filters to planner

$(".row").each(function () {
    var currentHour = moment().hour("HH");
    var plannerHour = $(this).attr("id");

    if (currentHour == plannerHour) {
        $(this).addClass("present");

    } else if (currentHour < plannerHour) {
        $(this).removeClass("present");
        $(this).addClass("future");

    } else if (currentHour > plannerHour) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

//set button icon class function


// function buttonIconCLassSet(){
//     var buttonIcon = saveButton.children(".fa-unlock");
//     buttonIcon.removeClass("fa-unlock");
//     buttonIcon.addClass("fa-lock");
//  }; 


//event delegation to buttons to save text in local storage
var saveButton = $(".saveBtn");

saveButton.on("click", function (event) {


    var time = $(this).siblings(".hour").text();
    var textValue = $(this).siblings(".description").val();



    localStorage.setItem(time, textValue);

    var buttonIcon = $(this).children(".fa-unlock");
    buttonIcon.removeClass("fa-unlock");
    buttonIcon.addClass("fa-lock");

    // function buttonIconCLassSet(event){
    //     event.stopPropagation;
    //     var buttonIcon = saveButton.children(".fa-unlock");
    //     buttonIcon.removeClass("fa-unlock");
    //     buttonIcon.addClass("fa-lock");
    //  }; 
    //buttonIconCLassSet($(".saveBtn"));

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

        var text = localStorage.getItem(hour);

        if (text) {
            $(this).find(".description").val(text);
        }

    });
};

//load data retrieving function when page loads
$(document).ready(function () {
    retrieveData();
});
