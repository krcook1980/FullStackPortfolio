var burgerBtn = $("#burger");
var menuList = $("#menu");
var contact = $(".contact").val();

burgerBtn.click(function(){
  burgerBtn.removeAttr("aria-expanded", "false");
  burgerBtn.attr("aria-expanded", "true");
  menuList.addClass("is-active");
});

menuList.click(function(){
  burgerBtn.removeAttr("aria-expanded", "true");
  burgerBtn.attr("aria-expanded", "false");
  menuList.removeClass("is-active");
});

  $("#button").click(function() {
    Email.send({
      SecureToken : "b8b15915-b696-4c2b-91dc-780fdd215e01",
      To : 'kellyrcook1980@gmail.com',
      From : "kcookwebdevelopment@gmail.com",
      Subject : "Portfolio Contact Me",
      Body : "From " + $(".contact").val() + " at " + $(".email").val() + " says " + $(".message").val()
  }).then(function (message) {
    $("#status").empty();
    console.log(message);
    if (message=="OK"){
      $("#status").append("<p>"+"Thank you, I will get back to you soon!"+"</p>");
    }
    else {
      $("#status").append("<p>"+"I'm sorry, something went wrong. Please submit again."+"</p>")
    }
  })
})
