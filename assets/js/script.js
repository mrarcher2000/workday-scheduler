var todayEl = $("#currentDay");
var timeBlock = $(".hour");
var now;
var textAreaEl;
var saveBtn = $(".saveBtn");

var savedTasks = [];

var loadTasks = function(){
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if(!savedTasks) {
        savedTasks={};
    } ;
    printTasks(savedTasks)
}

var printTasks = function(){
    $.each(savedTasks, function(list, arr){

        var taskP = $("<p>").addClass("description task-item-" + list).text(arr)
        

        $("#task-item-" + list).replaceWith(taskP);
    })
 }

var todayIs = function() {
    var now = moment().format("dddd, MMMM Do YYYY, hh:mm a");
    todayEl.html(now);
    console.log("Today is " + now);

    currentTime(now);
};

var currentTime = function(now) {
    for (var i = 8; i < timeBlock.length; i++) {
        var textArea = $("#text" + i);

        var hourOfDay = timeBlock[i].getAttribute("id");
        console.log(hourOfDay);
        hourOfDay = parseFloat(hourOfDay);
        var timeObj = moment().hour(hourOfDay);
        console.log(timeObj);

        if (moment().hour() > i) {
            $(textArea).addClass("past");
        } else if (moment().hour() === i) {
            $(textArea).removeClass("past")
            $(textArea).addClass("present");
        } else {
            $(textArea).removeClass("past")
            $(textArea).addClass("future");
        };
    };
};

$(saveBtn).on("click", function() {

    var i = $(saveBtn).index(this);

    savedTasks[i] = $(this).parent().find("#task").text();
    localStorage.setItem("saveTasks", JSON.stringify(savedTasks));
});

loadTasks();
todayIs();