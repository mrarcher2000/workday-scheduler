var todayEl = $("#currentDay");

var todayIs = function() {
    var now = moment().format("dddd, MMMM Do YYYY, hh:mm a");
    todayEl.html(now);
    console.log("Today is " + now);
};

var 

todayIs();