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
  // console.log("clicked");

  function postThankYou(e){
    e.preventDefault();
    console.log("clicked");
  }
  
});
// var newEnquiry = $('#enquiry');
// newEnquiry.on("click", createThankYou);

// function createThankYou(e){
//   e.preventDefault();

//   $(document).append('<div class="hidden">'+
//     '<span>Thanks for getting in contact, one of our representatives will get back to you soon.In the meantime why don&#8217;t you visit our sister site at:</span>' +
//     '<button>'+'<a href="http://www.a-e-l.co.uk">www.a-e-l.co.uk</a>'+'</button>'+
//     '</div>')
// }