//Form validation

//Declaring the variables
const uname=document.getElementById('fname');
const phone=document.getElementById('tel');
const gender=document.getElementById('sex');
const date=document.getElementById('date')

//Alerts to ensure proper submission
form.addEventListener('submit',(e)=>{
    if (uname.value==""||phone.value==""||date.value==""||gender.value==""){
        alert("Please fill in all of the fields!")
    }
    else{
        alert("You are registered successfully, thank you!")
    }   
})