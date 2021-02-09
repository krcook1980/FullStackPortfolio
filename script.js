//form html and js from formspree.io

  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = $("#my-form");
    var button = $("#my-form-button");
    var status = $("#my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thank you for reaching out to me!";
    }

    function error() {
      status.innerHTML = "I'm sorry, something went wrong. Please try again.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    // xhr.open(method, url);
    // xhr.setRequestHeader("Accept", "application/json");
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState !== XMLHttpRequest.DONE) return;
    //   if (xhr.status === 200) {
    //     success(xhr.response, xhr.responseType);
    //   } else {
    //     error(xhr.status, xhr.response, xhr.responseType);
    //   }
    };
    xhr.send(data);
  }


