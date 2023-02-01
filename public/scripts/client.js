/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  /**
  * Takes in a new tweet object
  * Returns a new html article, with all tweet information organized into correct elements
  */
  const createTweetElement = function(tweetObj) {
    const $tweet = $("<article>").addClass("tweet");

    const innerHTML = `
          <header>
              <img src= ${tweetObj.user.avatars}>
              <h4>${tweetObj.user.name}</h4>
              <p>${tweetObj.user.handle}</p>
          </header>
          <p>${tweetObj.content.text}</p>
          <footer>
            <p>${tweetObj["created_at"]}</p>
            <span class="interactOptions"><i class="fa-solid fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></span>
          </footer>
          `;

    $tweet.append(innerHTML);
    return $tweet;
  };

  const renderTweets = function(tweetObjArr) {
    for (const tweet of tweetObjArr) {
      const $tweet = createTweetElement(tweet);
      $('section.all-tweets').append($tweet);
    }
  };

  renderTweets(data);


});

/**
 * Takes an array of tweet objects
 * Runs each tweet object through our createTweetElement function
 * Prepends each returned tweet element to the html section with class 'all-tweets'
 */
const renderTweets = function(tweetObjArr) {
  for (const tweet of tweetObjArr) {
    const $tweet = createTweetElement(tweet);
    $('section.all-tweets').prepend($tweet);
  }
};