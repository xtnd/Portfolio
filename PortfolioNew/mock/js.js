$(".singleFeature").hover(function() {
    console.log("hi");
});


function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
 } 


 function continueOrNot() {
    if(validateEmail(document.getElementById('emailfield').value)){
        document.getElementById('error').innerHTML = 'Valid'; 
        return true;
    } else{ 
        document.getElementById('error').innerHTML = 'Email is Not Valid. Must have a single @'; 
        return false;
    }
 }