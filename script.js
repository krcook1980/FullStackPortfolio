 
    var emailAddress = ($(".email").val());
    var comment = $(".comment").val();
    var sender = $(".name").val();


$(".submit").click(function(){
    
    Email.send({
        SecureToken : "cdddc7fe-dd97-41c0-88ab-69112add13e4",
        To : "kellyrcook1980@gmail.com",
        From : "kellyrcook1980@gmail.com",
        Subject : "Portfolio Contact Request",
        Body : "Hi " + comment + " from " + sender + " at " + emailAddress
    }).then(function (message) {
        $(".emailNotification").empty();
        
        if (message=="OK"){
            $(".emailNotification").append("<p>"+"Thank you, I will get back to you soon!"+"</p>");
        }
        else {
            $(".emailNotification").append("<p>"+"I'm sorry, something went wrong, please try again."+"</p>")
        }
        console.log(message);
    })
});
