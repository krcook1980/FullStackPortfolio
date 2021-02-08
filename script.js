 
    var emailAddress = ($(".email").val());
    var comment = $(".comment").val();
    var sender = $(".name").val();


$(".submit").click(function(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kellyrcook@gmail.com",
        Password : "WeeRiden1!",
        To : 'kellyrcook@gmail.com',
        From : "kellyrcook@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    // Email.send({
    //     SecureToken : "a6a2d22c-aa1a-4dca-8fad-732746a99af7",
    //     To : "kellyrcook1980@gmail.com",
    //     From : "kelly_cook1@msn.com",
    //     Subject : "Portfolio Contact Request",
    //     Body : comment + " from " + sender + " at " + emailAddress
    // }).then(function (message) {
    //     $(".emailNotification").empty();
        
    //     if (message=="OK"){
    //         $(".emailNotification").append("<p>"+"Thank you, I will get back to you soon!"+"</p>");
    //     }
    //     else {
    //         $(".emailNotification").append("<p>"+"I'm sorry, something went wrong, please try again."+"</p>")
    //     }
    //     console.log(message);
    // })
});
