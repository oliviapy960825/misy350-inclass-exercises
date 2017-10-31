
function main(){
  //all code should be in here
  //document.getElementById("google").innerHTML= "Google";
  $('#google').html('Gooooogle');
  //let links=document.getElementsByClassName("my-link");
  let links= $('.my-link');
  links[0].innerHTML="Twitter";
  links[0].href="http://www.twitter.com";
  links[1].innerHTML="LinkedIn";
  links[1].href="http://www.linkedin.com";
  links[1].style.color="red";

  //button click event
  $('#heading-button').click(function(){
    $('h1').css('color','red');
    $('.my-links').hide();
  });

  //toggle button click

  $('#toggle-button').click(function(){
    $('.my-links').toggle();
  });
  //hide and show main text
  $('#main-text').hide();
  $('#main-text').fadeIn(5000);
  // hide projects

  $('.projects').hide();

  //show projects

  $('.project-button').click(function(){
    $(this).next().slideToggle(500);
  })
}
$(document).ready(main);//run the js codes after finishing loading the page
