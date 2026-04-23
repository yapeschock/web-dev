
let buttonDiv = document.getElementById("button-Div");
let mode = document.getElementById("mode");
let isdark = false;
function darkOnOff(Event){
  //changebckground color
  if (isdark) document.body.style.backgroundColor = "white";
    else document.body.style.backgroundColor = "black";
  //change mode text
 if (isdark)document.body.style.text = "black";
    else document.body.style.text = "white";
  //change text color
 if (isdark)mode.innerHTML = "<p>Dark mode off</P>";
    else mode.innerHTML =  "<p>Dark mode on</P>";

 
}
