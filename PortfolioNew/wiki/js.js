$(document).ready(function(){
    console.log("in ready");

    $('#searchTerm').on({
        mouseenter: function() {
            $(this).animate({width: '500'},500)
        },
        mouseleave: function() {
            $(this).animate({width: '300'},500)
        }
    });
    

    $("#search").click(function(){
        
        var searchTerm = $("#searchTerm").val();
       
        var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&callback=?";

        $.getJSON(api,function(data){
            console.log(data);
            var txt = "";

            for(var i = 0; i<9; i++){
                txt += "<div class='row item' id='display'><a target='_blank' href='https://en.wikipedia.org/wiki/" + 
                data.query.search[i].title + "'><h2>" + 
                data.query.search[i].title + "</h2></a><h6>" + 
                data.query.search[i].timestamp + "</h6><p>" + 
                data.query.search[i].snippet + "...</p></div><br>"
                $("#display-text").html(txt);
            }
            
        })
            
        

    });
})

    
