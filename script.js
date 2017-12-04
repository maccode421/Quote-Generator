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

        // share to Twitter 
        $("#share-quote").on('click', function(event) {
            // event.preventDefault();
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomQuote));
        });
    }
    getQuote();
    $("#get-quote").on('click', function(event) {
        // event.preventDefault();
        getQuote();
    });
});

// Facebook Plugin
(function(d, s, id) {
        var js,
        fjs = d.getElementsByTagName(s)[0];
        
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
        fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'facebook-jssdk'));