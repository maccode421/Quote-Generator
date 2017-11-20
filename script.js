/* global $ */

$(document).ready(function() {

    var yodaQuotes = [
        "Do. Or do not. There is no try. \n-Yoda",
        "You must unlearn what you have learned. \n-Yoda",
        "When nine hundred years old you reach, look as good you will not. \n-Yoda",
        "Truly wonderful, the mind of a child is. \n-Yoda",
        "A Jedi uses the Force for knowledge and defense, never for attack. \n-Yoda",
        "Adventure. Excitement. A Jedi craves not these things. \n-Yoda",
        "Size matters not. Judge me by my size, do you? \n-Yoda",
        "Fear is the path to the dark side…fear leads to anger…anger leads to hate…hate leads to suffering. \n-Yoda",
        "Wars not make one great. \n-Yoda",
        "Luminous beings are we…not this crude matter. \n-Yoda",
        "Difficult to see. Always in motion is the future. \n-Yoda",
        "Control, control, you must learn control! \n-Yoda"
    ];

    function getQuote() {

        var randomQuote = yodaQuotes[Math.floor(Math.random() * yodaQuotes.length)];
        $("#quote").html(randomQuote);
        console.log(randomQuote);

        // Using the Twitter API
        // var quoteLink = 'https://twitter.com/intent/tweet?text=' + randomQuote;
        $("#share-quote").on('click', function(event) {
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomQuote));
            console.log("it works 2");
        });

    }

    $("#get-quote").on('click', function(event) {
        event.preventDefault();
        getQuote();
        console.log("it works");
    });

});
