
/*
 todo:
 */

var cards = document.getElementById("cards");
var scoreBox = document.getElementById("score");
var deck = [];
var table = [];
var selectedCards = [];
var score = 0;

var card1 = {
  id: 1,
  count: 1,
  fill: 1,
  color: 1,
  shape: 1,
  selected: false
}
var card2 = {
  id: 2,
  count: 2,
  fill: 2,
  color: 2,
  shape: 2,
  selected: false
}
var card3 = {
  id: 3,
  count: 3,
  fill: 3,
  color: 3,
  shape: 3,
  selected: false
}
var card4 = {
  id: 4,
  count: 1,
  fill: 1,
  color: 2,
  shape: 1,
  selected: false
}
var card5 = {
  id: 5,
  count: 1,
  fill: 1,
  color: 2,
  shape: 2,
  selected: false
}
var card6 = {
  id: 6,
  count: 1,
  fill: 1,
  color: 2,
  shape: 3,
  selected: false
}
var card7 = {
  id: 7,
  count: 1,
  fill: 1,
  color: 3,
  shape: 1,
  selected: false
}
var card8 = {
  id: 8,
  count: 1,
  fill: 1,
  color: 3,
  shape: 2,
  selected: false
}
var card9 = {
  id: 9,
  count: 1,
  fill: 1,
  color: 3,
  shape: 3,
  selected: false
}
var card10 = {
  id: 10,
  count: 1,
  fill: 2,
  color: 1,
  shape: 1,
  selected: false
}
var card11 = {
  id: 11,
  count: 1,
  fill: 2,
  color: 1,
  shape: 2,
  selected: false
}
var card12 = {
  id: 12,
  count: 1,
  fill: 2,
  color: 1,
  shape: 3,
  selected: false
}

deck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];

function dealCards(n) {
  for(i=0; i<n; i++) {
    // picks a random spot in the deck
    var position = Math.floor(Math.random()*deck.length)
    // takes the card at position and adds to to table[]
    table.push(deck[position]);
    // removes card at position from deck[]
    deck.splice(position, 1);
  }
}

function getCardcount(object) {
  switch (object.count) {
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
      console.log("error getting count");
      break;
  }
}

function getCardFill(object) {
  switch (object.fill) {
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
  switch (object.shape) {
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
  var id = object.id;
  var count = getCardcount(object);
  var fill = getCardFill(object);
  var color = getCardColor(object);
  var shape = getCardShape(object);
  card.setAttribute("data-id",id);
  card.innerHTML = "" + count + " " + fill + " " + color + " " + shape;
  card.classList.add("card");
  card.classList.add("styleA");
  if (object.selected === true) {
    card.classList.add("selected");
  }
  return card;
}

function renderTable(array) {
  // remove all cards from DOM
  while(cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
  // re-render all cards
  for(i=0; i<array.length; i++) {
    cards.appendChild(renderCard(array[i]));
  }
}

function Card(x,y) {
  this.x = x;
  this.y = y;
}

function deselectAllCards() {
  for (var i=0; i<cards.children.length; i++) {
    cards.children[i].classList.remove("selected");
    selectedCards = 0;
  }
}

// SET UP

dealCards(12);
renderTable(table);

// END SET UP

var chosen = [card1, card2, card3];

function checkForMatch(array) {
  var match = 0;
  var colorTotal = 0
  var fillTotal = 0
  var countTotal = 0
  var shapeTotal = 0
  for (var i=0; i<array.length; i++) {
    colorTotal += array[i].color
    fillTotal += array[i].fill
    countTotal += array[i].count
    shapeTotal += array[i].shape
  }
  if (colorTotal % 3 === 0) {
    match++
  }
  if (fillTotal % 3 === 0) {
    match++
  }
  if (countTotal % 3 === 0) {
    match++
  }
  if (shapeTotal % 3 === 0) {
    match++
  }

  if (match === 4) {
    return true
  } else {
    return false
  }
}

// takes an html card element and an array of card objects
// returns the card object in the array that matches the html element
function matchCardElementToObject(cardElement,cardArray) {
  // the value of the html card elemtent's 'data-id' attribute
  var cardElementId = parseInt(cardElement.getAttribute('data-id'));
  // loops through the array and returns the card object whose id matches cardElementId
  for (var i=0; i<cardArray.length; i++) {
    var cardObject = cardArray[i];
    if (cardObject.id === cardElementId) {
      return cardObject;
    }
  }
}

function toggleSelected(cardObject) {
  if (cardObject.selected === true) {
    cardObject.selected = false;
  } else if (cardObject.selected === false) {
    cardObject.selected = true;
  } else {
    console.log("error setting 'selected' value for given object")
  }
}

document.body.onclick = function(e) {

  if (e.target.classList.contains("card")) {

    var clickedObject = matchCardElementToObject(e.target,table);
    toggleSelected(clickedObject);
    console.log(clickedObject.id);

    while(selectedCards[0]) {
      selectedCards.pop(selectedCards[0]);
    }

    for (var i=0; i<table.length; i++) {
      card = table[i];
      if (card.selected === true) {
        selectedCards.push(card);
      }
    }

    if (selectedCards.length === 3 && checkForMatch(selectedCards)) {
      console.log("it's a match!")
    }

    renderTable(table);
  }
}
