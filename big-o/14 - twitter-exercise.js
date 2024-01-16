// Retrieve most recent tweet and older tweet.
const tweets = [];

// retrieve the most recent
// assuming it's already ordered

// O(1)
function retrieveMostRecentTweet(tweets)
{
    return tweets[0];
}

// O(1)
function retrieveOlderTweet(tweets)
{
    return tweets[tweets.length - 1]
}

// Compare the dates of the tweets
const tweetsToCompare = [{tweet: "first", date: 2013}, {tweet:"second", date: 2014}];

// We need to compare all the tweets with all other tweets
// O(n^2)
// We probably want to avoid that, since this can have a high cost to the company
function compareTweetDates(tweets) {
    let firstTweet;
    let secondTweet;

    for (let i = 0; i < tweets.length; i++) {
        firstTweet = tweet[i];

        for (let j = 1; j < tweets.length; j++) {
            secondTweet = tweet[j];
        }
    }

    if (firstTweet.date > secondTweet.date) return firstTweet.date;
    return secondTweet.date; 
}