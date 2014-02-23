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

$(function () {
  newTweetBoxHandler();
});