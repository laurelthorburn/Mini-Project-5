
//Creating moment timestamp

function updateClock() {
    var currentTime = moment();
    $("#time").text(currentTime.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }
  setInterval(updateClock, 1000);
var currentTime = moment();




// main and bttn form var
var projectFormEl = $("#project-form");
var submitBttn = $("#submitBttn");

// Capturing the element with users input
var projectName = $("#projectName").value;
var projectType = $("#projectType").value;
var dueDate = $("#dueDate").value;
var hourlyRate = $("#hourlyRate").value;

// object for storing project info and later transferring it
var project = [
    projectName = "",
    projectType = "",
    dueDate = "",
    hourlyRate = ""
];

// take users input and transfers in to the object
function captureInput(){
 
// function to print the object from last function
    printInput();
};

submitBttn.addEventListener("submit", captureInput);
