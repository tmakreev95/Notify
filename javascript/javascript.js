//Animations
$(function() {
  var animationName = 'animated pulse';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(".about-notify article").on('mouseenter',function() {
      $(this).addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});

$(function() {
  var animationName = 'animated flash';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(".subscribe-form a").on('mouseenter',function() {
      $('.notify-subscription-wrapper section article h4').addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});

$(function() {
  var animationName = 'animated pulse';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(".testimonial-avatars a").on('mouseenter',function() {
      $(this).addClass(animationName).one(animationEnd,function() {
      $(this).removeClass(animationName);
    });
  });
});
