
/*
 * todo:
 * make a function that renders cards from objects into HTML (done)
 * make a dealer function that displays cards on the table
 */

var cards = document.getElementById("cards");
var scoreBox = document.getElementById("score");
var selectedCards = 0;
var score = 0;

var card1 = {
  quantity: 1,
  fill: 1,
  color: 1,
  shape: 1
}

var card2 = {
  quantity: 1,
  fill: 1,
  color: 2,
  shape: 1
}

var card3 = {
  quantity: 1,
  fill: 1,
  color: 3,
  shape: 1
}

var deck = [card1, card2, card3];

// cards.appendChild(card1);

function removeSelectedCards() {
  var chosenCards = document.getElementsByClassName("selected");
  var parent = chosenCards[0].parentNode;
  // adds selected cards back to the deck
  for (i=0; i<chosenCards.length; i++) {
    deck.push(chosenCards[i])
  }
  // removes selected cards from table
  for (i=0; i<chosenCards.length; i++) {
    parent.removeChild(chosenCards[0]);
  }
  // removes "selected" class from ALL cards in deck
  for (i=0; i<deck.length; i++) {
    card = deck[i];
    card.classList.remove("selected");
  }
}

// creates one card with number n on it
// function createCard(n) {
//   var card = document.createElement("div");
//   var number = document.createElement("p");
//   card.classList.add("card");
//   if (Math.random()<0.5)
//     card.classList.add("styleA");
//   else
//     card.classList.add("styleB");
//   number.innerHTML = n;
//   card.appendChild(number);
//   return card;
// }

function getCardQuantity(object) {
  switch (object.color) {
    case 1:
      return "1";
      break;
    case 2:
      return "1";
      break;
    case 3:
      return "3";
      break;
    default:
      console.log("error getting quantity");
      break;
  }
}

function getCardFill(object) {
  switch (object.color) {
    case 1:
      return "empty";
      break;
    case 2:
      return "shaded";
      break;
    case 3:
      return "solid";
      break;
    default:
      console.log("error getting fill");
      break;
  }
}

function getCardColor(object) {
  switch (object.color) {
    case 1:
      return "red";
      break;
    case 2:
      return "green";
      break;
    case 3:
      return "purple";
      break;
    default:
      console.log("error getting color");
      break;
  }
}

function getCardShape(object) {
  switch (object.color) {
    case 1:
      return "oval";
      break;
    case 2:
      return "diamond";
      break;
    case 3:
      return "squiggle";
      break;
    default:
      console.log("error getting shape");
      break;
  }
}

function renderCard(object) {
  var card = document.createElement("div");
  var quantity = getCardQuantity(object);
  var fill = getCardFill(object);
  var color = getCardColor(object);
  var shape = getCardShape(object);
  card.innerHTML = "" + quantity + " " + fill + " " + color + " " + shape;
  card.classList.add("card");
  return card;
}

function Card(x,y) {
  this.x = x;
  this.y = y;
}

// cards in deck are in number order. this deals n cards, each from a random position in the deck.
// function dealCards(n) {
//   for(i=0; i<n; i++) {
//     position = Math.floor(Math.random()*deck.length)
//     cards.appendChild(deck[position]);
//     // what does splice do?
//     deck.splice(position, 1);
//   }
// }

// function dealCards(n) {
//   for(i=0; i<nl i++) {
//     cards.appendChild
//   }
// }

function deselectAllCards() {
  for (var i=0; i<cards.children.length; i++) {
    cards.children[i].classList.remove("selected");
    selectedCards = 0;
  }
}

function doSelectedCardsMatch() {
  var selectedCards = document.getElementsByClassName("selected");
  var matched = 0;
  // loops through selected cards, incrementing the "matched" variable if they match
  if (selectedCards[0].classList.contains("styleA")) {
    for (var i=0; i<selectedCards.length; i++) {
      if (selectedCards[i].classList.contains("styleA")) {
        matched++;
      }
    }
  } else if (selectedCards[0].classList.contains("styleB")) {
    for (var i=0; i<selectedCards.length; i++) {
      if (selectedCards[i].classList.contains("styleB")) {
        matched++;
      }
    }
  } else {
    console.log("hey there's an error");
  }

  if (matched === 3) {
    return true;
  } else {
    return false;
  }
}

// SETUP

// create 81 cards and puts them in deck
// for (i=0;i<81;i++) {
//   deck.push(createCard(i));
// }

// puts 12 cards on table
// dealCards(3);

// END SETUP

document.body.onclick = function(e) {

  // increments and decrements the number of selected cards when a card is clicked
  if (e.target.classList.contains("card")) {
    var card = e.target
    if (!card.classList.contains("selected")) {
      selectedCards++;
    } else {
      selectedCards--;
    }

    // toggled the selected state of the clicked card
    card.classList.toggle("selected");

    // when three cards are selected
    if (selectedCards === 3) {
      // if they match: increase score, put cards back in deck, and deal new ones.
      // otherwise: deselect cards
      if (doSelectedCardsMatch()) {
        setTimeout(removeSelectedCards, 500);
        score++;
        scoreBox.innerHTML = score;
        dealCards(3);
      } else {
        setTimeout(deselectAllCards, 500);
      }
      selectedCards = 0;
    }
  }
}
