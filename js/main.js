// console.log("hello")
$(document).ready(function(){

  $(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
  });

  var enquiry = $('#newEnquiry');
  enquiry.on("submit", postThankYou);

  function postThankYou(e){
    e.preventDefault();
    window.location.href = "thanks.html";
  }

});
