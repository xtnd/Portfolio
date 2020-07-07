
$(document).ready(function(){
    $("#projectButton").click(function() {
        
        $('html, body').animate({
            scrollTop: $("#portfolioScroll").offset().top
        }, 2000);
    });

    $("#contactButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#contactScroll").offset().top
        }, 2000);
    });

    $("#homeButton, #logoHome").click(function() {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });
})
    

    function validateEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //(?:\d{3}(?:\d{7}|\-\d{3}\-\d{4}))|(?:\(\d{3}\)(?:\-\d{3}\-)|(?: \d{3} )\d{4}) 1239191919 || xxx-xxx-xxxx
        return re.test(email);
     } 
    
    
     function continueOrNot() {
        

        if(validateEmail(document.getElementById('emailfield').value)){
            document.getElementById('error').innerHTML = 'Valid'; 
            return true;
        } else{ 
            document.getElementById('error').innerHTML = 'Email is Not Valid. Please try again.'; 
            return false;
        }

        
     }