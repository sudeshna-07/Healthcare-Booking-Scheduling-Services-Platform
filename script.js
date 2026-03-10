// Confirm Appointment and redirect to confirmation page
function confirmAppointment() {
    const name = document.getElementById("name") ? document.getElementById("name").value : "";
    const date = document.getElementById("date") ? document.getElementById("date").value : "";
    if(name && date) {
        alert(`Appointment confirmed for ${name} on ${date}`);
        window.location.href = "confirmation.html";
    } else if(name) {
        // For senior booking (only name)
        alert(`Request submitted for ${name}. Staff will contact soon.`);
        window.location.href = "confirmation.html";
    } else {
        alert("Please fill all fields!");
    }
}

// Voice input using Web Speech API
function bookAppointment(){

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let dept = document.getElementById("department").value;
let problem = document.getElementById("problem").value;
let date = document.getElementById("date").value;
let senior = document.getElementById("senior").checked;

/* Form validation */

if(name=="" || age=="" || problem=="" || date==""){
alert("Please fill all fields.");
return;
}

let message = "";

/* Priority scheduling logic */

if(age >= 60 || senior == true){
message = "Priority Appointment Booked for Senior Citizen.";
}
else{
message = "Appointment Booked Successfully.";
}

/* Display result */

document.getElementById("result").innerHTML =
"<b>Patient:</b> " + name + "<br>" +
"<b>Department:</b> " + dept + "<br>" +
"<b>Problem:</b> " + problem + "<br>" +
"<b>Date:</b> " + date + "<br><br>" +
"<b>Status:</b> " + message;

}


/* Voice Recognition */

function startVoice(){

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(!SpeechRecognition){
alert("Voice recognition not supported in this browser");
return;
}

const recognition = new SpeechRecognition();

recognition.lang = "en-US";

document.getElementById("listening").innerHTML="🎤 Listening... Speak now";

recognition.start();

recognition.onresult=function(event){

let speech = event.results[0][0].transcript;

document.getElementById("problem").value=speech;

document.getElementById("listening").innerHTML="Voice captured ✔";

}

recognition.onerror=function(){
document.getElementById("listening").innerHTML="Voice not detected";
}

}