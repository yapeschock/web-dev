for(let i = 10; i > 0; i--){
  console.log(10-i);
}
console.log("blastoff")

function iterateLetters() {
  let name = document.getElementById("input").value;
  for(let i = 0 ;i < name.lenght; i++){
    let ltr = name.substr(i,1)
    console.log("The next letter in your name is " + ltr)
  }
}

