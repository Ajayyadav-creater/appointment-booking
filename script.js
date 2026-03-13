function nextStep(){

let phone = document.getElementById("phone").value;
let error = document.getElementById("error");

if(phone.length != 10){

error.style.display="block";

}else{

error.style.display="none";

alert("Proceeding to Step 2");

}

}