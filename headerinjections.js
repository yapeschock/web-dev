let elem = document.createElement("div");
document.body.prepend(elem);
elem.innerHTML = "<link rel= 'stylesheet' href = 'http://yapeschock.github.io/web-dev/globalheader.html'"
fetch("http://yapeschock.github.io/web-dev/header.css")  
  .then((output)=>output.text)
  .then((text)=>{elem.innerHTML = elem.innerHTML + text;})
  .catch((e)=>console.error(e));
