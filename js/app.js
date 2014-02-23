function newTweetBoxHandler() {
   $(document).on('click', '#inline-tweet-form .input-div', function () {
    $('#inline-tweet-form a, #inline-tweet-form span, #inline-tweet-form button').removeClass('hidden');
    $('#inline-tweet-form .input-div').replaceWith('<textarea autofocus maxlength="140" rows="5"></textarea>');
  });
  
  $(document).on('blur', '#inline-tweet-form textarea', function () {
    $('#inline-tweet-form a, #inline-tweet-form span, #inline-tweet-form button').addClass('hidden');
    $('#inline-tweet-form textarea').replaceWith('<div class="input-div">Compose new Tweet...</div>');
  });
}

function spinHandler() {
  var opts = {
    lines: 11, // The number of lines to draw
    length: 6, // The length of each line
    width: 3, // The line thickness
    radius: 8, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#ddd', // #rgb or #rrggbb or array of colors
    speed: 1.3, // Rounds per second
    trail: 53, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
  };
  var target = document.getElementById('spinner');
  var spinner = new Spinner(opts).spin(target);
}

var evTweet = {
  'imgUrl': 'img/Evgeny-profile.png',
  'name': 'Evgeny Shadchnev',
  'username': '@shadchnev',
  'date': 'Feb 21',
  'content': 'Awesome review of <a href="#">@makersacademy</a> by the current student <a href="#">@MakisOtman</a> in response to a bad review by a past student <a href="#">http://shokunin.roon.io/makers-academy-review-so-far</a>&hellip;'
};
var enTweet = {
  'imgUrl': 'img/enrique-profile.jpeg',
  'name': 'Dr Riepenhausen',
  'username': '@ecomba',
  'date': 'Feb 12',
  'content': 'Thinking about buckets&hellip;'
};

function infiniteScrolling() {
  function addTweet(tweet) {
    $('.tweets').append('<li><article class="tweet"><img alt="tweet-profile" src="'+tweet.imgUrl+'" /><section class="body"><header><a href="#"><h1>'+tweet.name+'</h1><span class="username">'+tweet.username+'</span></a><span class="time">'+tweet.date+'</span></header><p>'+tweet.content+'</p><footer><ul><li><a class="inline-reply" href="#"><span class="icon reply-icon"></span> <span class="reply-text">Reply</span></a></li></ul></footer></section><ul><li><a href="#"><span class="icon favourite-icon"></span></a></li><li><a href="#"><span class="icon retweet-icon"></span></a></li></ul></article></li>');
  }
  
  $(window).scroll(function(){
    if  ($(window).scrollTop() == $(document).height() - $(window).height()){
      console.log('screen-bottom');
      window.setTimeout(function() {
        addTweet(evTweet);
        addTweet(enTweet);
      }, 500);
    }
  });
}

$(function () {
  newTweetBoxHandler();
  spinHandler();
  infiniteScrolling()
});