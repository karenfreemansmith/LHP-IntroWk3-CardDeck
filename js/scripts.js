//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

var suits=["diamonds", "clubs", "hearts", "spades"];
var cardValues=["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];


suits.forEach(function(suit) {
  cardValues.forEach(function(card) {
    $("#showCards").append("<li>" + card + " of " + suit + "</li>");
  });
});
