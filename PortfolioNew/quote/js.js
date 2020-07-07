
$(document).ready(function() { 
  document.getElementById('didYouAddQUote').style.display = "none";
    var quotes = [{
        'quote': 'Always code as if the guy who maintains your code will be a violent psychopath who knows where you live',
        'by': 'My Professor',
      }, {
        'quote': 'Everyone should learn how to code. It teaches you how to think.',
        'by': 'Steve Jobs',
      }, {
        'quote': 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'by': 'John Johnson',
      }]
   
    
          var textboxQuote = document.getElementById('addYourOwnQuoteCheckbox');

      document.getElementById('addQuote').addEventListener("click", function(){
            
          if(textboxQuote.value != "") {
              
              var length = quotes.length;
                quotes.push( {quote: document.getElementById('addYourOwnQuoteCheckbox').value, by: "Created via test app"});
                
              if(length != quotes.length) {
                  document.getElementById('didYouAddQUote').style.display = "block";
                  $("#text").html("\" " + quotes[quotes.length-1].quote + " \"");
                  $("#author").html("- " + quotes[quotes.length-1].by);
              }
                           
          }
            
      });

      document.getElementById('addYourOwnQuoteCheckbox').addEventListener("focus", function(){
        document.getElementById('didYouAddQUote').style.display = "none";
      });

      

    //generates a random quote from 0-length of arrary.
    $( "#test" ).click(function() {
        number = Math.floor(Math.random() * quotes.length);
        $("#text").html("\" " + quotes[number].quote + " \"");
        $("#author").html("- " + quotes[number].by);
        
    });

    //tweets the quote by taking in the text from #text and #author
    $(".twitterButton").click(function(){
        window.open("https://twitter.com/intent/tweet?text=" + 
        $("#text").text() + " " + 
        $("#author").text());
        
    });


 });



