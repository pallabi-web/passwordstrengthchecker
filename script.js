var pass= document.getElementById("password");
var msg= document.getElementById("message");
var str= document.getElementById("strength");
var lgt= document.getElementById("light");

pass.addEventListener('input' , () => {

  if(pass.value.length > 0){
    msg.style.display = "block";
  }
  else
  {
    msg.style.display = "none";

  }
  if(pass.value.length < 4){
    str.innerHTML = "weak";
    lgt.style.backgroundColor = "red";
    msg.style.color = "red";
    str.style.color = "red";

  }
  else if(pass.value.length >= 4 && pass.value.length < 8){
    str.innerHTML = "medium";
    lgt.style.backgroundColor = "orange";
    msg.style.color = "orange";
    str.style.color = "orange";
  }
  else if(pass.value.length >= 8){
    str.innerHTML = "strong";
    lgt.style.backgroundColor = "green";
    msg.style.color = "green";
    str.style.color = "green";
  }

});

