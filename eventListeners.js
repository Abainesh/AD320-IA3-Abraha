

// Selecting button element
document.getElementById("myBtn").addEventListener("click", displayTime);
function displayTime(){
    document.getElementById("demo").innerHTML = Date();
}

// Loads an Iframe 
document.getElementById("myFrame").addEventListener("load", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = "Iframe loaded.";
    
}

// change the font color of h1 "Meditation"
document.getElementById("myFont").addEventListener("mouseover", mouseOver);
document.getElementById("myFont").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("myFont").style.color = "pink";
}

function mouseOut() {
  document.getElementById("myFont").style.color = "purple";
}

// Change user input to Upper Case
document.getElementById("fname").addEventListener("change", myFunction);

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

//  Focus or blur text-box by clicking a button
document.getElementById("txt").addEventListener("inputFocus", inputFocus);
document.getElementById("txt").addEventListener("inputBlur", inputBlu)
function inputFocus() { 
            document.getElementById('txt').focus(); 
        } 
  
        function inputBlur() { 
            document.getElementById('txt').blur(); 
        } 