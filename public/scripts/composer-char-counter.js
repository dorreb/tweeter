$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    let newTweetLength = $(this).val().length;
    let nearbyCounter = $(this).siblings('.counter');
    const tweetLengthLimit = 140;

    if (newTweetLength > tweetLengthLimit) {
      nearbyCounter.addClass('tweetTooLong');
    } else if (newTweetLength <= tweetLengthLimit) {
      nearbyCounter.removeClass('tweetTooLong');
    }
    nearbyCounter.text(tweetLengthLimit - newTweetLength);
  });
});