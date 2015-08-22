
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
  count: 1,
  fill: 1,
  color: 1,
  shape: 2,
  selected: false
}
var card3 = {
  id: 3,
  count: 1,
  fill: 1,
  color: 1,
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
var card13 = {
  id: 13,
  count: 1,
  fill: 2,
  color: 2,
  shape: 1,
  selected: false
}
var card14 = {
  id: 14,
  count: 1,
  fill: 2,
  color: 2,
  shape: 2,
  selected: false
}
var card15 = {
  id: 15,
  count: 1,
  fill: 2,
  color: 2,
  shape: 3,
  selected: false
}
var card16 = {
  id: 16,
  count: 1,
  fill: 2,
  color: 3,
  shape: 1,
  selected: false
}
var card17 = {
  id: 17,
  count: 1,
  fill: 2,
  color: 3,
  shape: 2,
  selected: false
}
var card18 = {
  id: 18,
  count: 1,
  fill: 2,
  color: 3,
  shape: 3,
  selected: false
}
var card19 = {
  id: 19,
  count: 1,
  fill: 3,
  color: 1,
  shape: 1,
  selected: false
}
var card20 = {
  id: 20,
  count: 1,
  fill: 3,
  color: 1,
  shape: 2,
  selected: false
}
var card21 = {
  id: 21,
  count: 1,
  fill: 3,
  color: 1,
  shape: 3,
  selected: false
}
var card22 = {
  id: 22,
  count: 1,
  fill: 3,
  color: 2,
  shape: 1,
  selected: false
}
var card23 = {
  id: 23,
  count: 1,
  fill: 3,
  color: 2,
  shape: 2,
  selected: false
}
var card24 = {
  id: 24,
  count: 1,
  fill: 3,
  color: 2,
  shape: 3,
  selected: false
}
var card25 = {
  id: 25,
  count: 1,
  fill: 3,
  color: 3,
  shape: 1,
  selected: false
}
var card26 = {
  id: 26,
  count: 1,
  fill: 3,
  color: 3,
  shape: 2,
  selected: false
}
var card27 = {
  id: 27,
  count: 1,
  fill: 3,
  color: 3,
  shape: 3,
  selected: false
}
var card28 = {
  id: 28,
  count: 2,
  fill: 1,
  color: 1,
  shape: 1,
  selected: false
}
var card29 = {
  id: 29,
  count: 2,
  fill: 1,
  color: 1,
  shape: 2,
  selected: false
}
var card30 = {
  id: 30,
  count: 2,
  fill: 1,
  color: 1,
  shape: 3,
  selected: false
}
var card31 = {
  id: 31,
  count: 2,
  fill: 1,
  color: 2,
  shape: 1,
  selected: false
}
var card32 = {
  id: 32,
  count: 2,
  fill: 1,
  color: 2,
  shape: 2,
  selected: false
}
var card33 = {
  id: 33,
  count: 2,
  fill: 1,
  color: 2,
  shape: 3,
  selected: false
}
var card34 = {
  id: 34,
  count: 2,
  fill: 1,
  color: 3,
  shape: 1,
  selected: false
}
var card35 = {
  id: 35,
  count: 2,
  fill: 1,
  color: 3,
  shape: 2,
  selected: false
}
var card36 = {
  id: 36,
  count: 2,
  fill: 1,
  color: 3,
  shape: 3,
  selected: false
}
var card37 = {
  id: 37,
  count: 2,
  fill: 2,
  color: 1,
  shape: 1,
  selected: false
}
var card38 = {
  id: 38,
  count: 2,
  fill: 2,
  color: 1,
  shape: 2,
  selected: false
}
var card39 = {
  id: 39,
  count: 2,
  fill: 2,
  color: 1,
  shape: 3,
  selected: false
}
var card40 = {
  id: 40,
  count: 2,
  fill: 2,
  color: 2,
  shape: 1,
  selected: false
}
var card41 = {
  id: 41,
  count: 2,
  fill: 2,
  color: 2,
  shape: 2,
  selected: false
}
var card42 = {
  id: 42,
  count: 2,
  fill: 2,
  color: 2,
  shape: 3,
  selected: false
}
var card43 = {
  id: 43,
  count: 2,
  fill: 2,
  color: 3,
  shape: 1,
  selected: false
}
var card44 = {
  id: 44,
  count: 2,
  fill: 2,
  color: 3,
  shape: 2,
  selected: false
}
var card45 = {
  id: 45,
  count: 2,
  fill: 2,
  color: 3,
  shape: 3,
  selected: false
}
var card46 = {
  id: 46,
  count: 2,
  fill: 3,
  color: 1,
  shape: 1,
  selected: false
}
var card47 = {
  id: 47,
  count: 2,
  fill: 3,
  color: 1,
  shape: 2,
  selected: false
}
var card48 = {
  id: 48,
  count: 2,
  fill: 3,
  color: 1,
  shape: 3,
  selected: false
}
var card49 = {
  id: 49,
  count: 2,
  fill: 3,
  color: 2,
  shape: 1,
  selected: false
}
var card50 = {
  id: 50,
  count: 2,
  fill: 3,
  color: 2,
  shape: 2,
  selected: false
}
var card51 = {
  id: 51,
  count: 2,
  fill: 3,
  color: 2,
  shape: 3,
  selected: false
}
var card52 = {
  id: 52,
  count: 2,
  fill: 3,
  color: 3,
  shape: 1,
  selected: false
}
var card53 = {
  id: 53,
  count: 2,
  fill: 3,
  color: 3,
  shape: 2,
  selected: false
}
var card54 = {
  id: 54,
  count: 2,
  fill: 3,
  color: 3,
  shape: 3,
  selected: false
}
var card55 = {
  id: 55,
  count: 3,
  fill: 1,
  color: 1,
  shape: 1,
  selected: false
}
var card56 = {
  id: 56,
  count: 3,
  fill: 1,
  color: 1,
  shape: 2,
  selected: false
}
var card57 = {
  id: 57,
  count: 3,
  fill: 1,
  color: 1,
  shape: 3,
  selected: false
}
var card58 = {
  id: 58,
  count: 3,
  fill: 1,
  color: 2,
  shape: 1,
  selected: false
}
var card59 = {
  id: 59,
  count: 3,
  fill: 1,
  color: 2,
  shape: 2,
  selected: false
}
var card60 = {
  id: 60,
  count: 3,
  fill: 1,
  color: 2,
  shape: 3,
  selected: false
}
var card61 = {
  id: 61,
  count: 3,
  fill: 1,
  color: 3,
  shape: 1,
  selected: false
}
var card62 = {
  id: 62,
  count: 3,
  fill: 1,
  color: 3,
  shape: 2,
  selected: false
}
var card63 = {
  id: 63,
  count: 3,
  fill: 1,
  color: 3,
  shape: 3,
  selected: false
}
var card64 = {
  id: 64,
  count: 3,
  fill: 2,
  color: 1,
  shape: 1,
  selected: false
}
var card65 = {
  id: 65,
  count: 3,
  fill: 2,
  color: 1,
  shape: 2,
  selected: false
}
var card66 = {
  id: 66,
  count: 3,
  fill: 2,
  color: 1,
  shape: 3,
  selected: false
}
var card67 = {
  id: 67,
  count: 3,
  fill: 2,
  color: 2,
  shape: 1,
  selected: false
}
var card68 = {
  id: 68,
  count: 3,
  fill: 2,
  color: 2,
  shape: 2,
  selected: false
}
var card69 = {
  id: 69,
  count: 3,
  fill: 2,
  color: 2,
  shape: 3,
  selected: false
}
var card70 = {
  id: 70,
  count: 3,
  fill: 2,
  color: 3,
  shape: 1,
  selected: false
}
var card71 = {
  id: 71,
  count: 3,
  fill: 2,
  color: 3,
  shape: 2,
  selected: false
}
var card72 = {
  id: 72,
  count: 3,
  fill: 2,
  color: 3,
  shape: 3,
  selected: false
}
var card73 = {
  id: 73,
  count: 3,
  fill: 3,
  color: 1,
  shape: 1,
  selected: false
}
var card74 = {
  id: 74,
  count: 3,
  fill: 3,
  color: 1,
  shape: 2,
  selected: false
}
var card75 = {
  id: 75,
  count: 3,
  fill: 3,
  color: 1,
  shape: 3,
  selected: false
}
var card76 = {
  id: 76,
  count: 3,
  fill: 3,
  color: 2,
  shape: 1,
  selected: false
}
var card77 = {
  id: 77,
  count: 3,
  fill: 3,
  color: 2,
  shape: 2,
  selected: false
}
var card78 = {
  id: 78,
  count: 3,
  fill: 3,
  color: 2,
  shape: 3,
  selected: false
}
var card79 = {
  id: 79,
  count: 3,
  fill: 3,
  color: 3,
  shape: 1,
  selected: false
}
var card80 = {
  id: 80,
  count: 3,
  fill: 3,
  color: 3,
  shape: 2,
  selected: false
}
var card81 = {
  id: 81,
  count: 3,
  fill: 3,
  color: 3,
  shape: 3,
  selected: false
}

deck = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30, card31, card32, card33, card34, card35, card36, card37, card38, card39, card40, card41, card42, card43, card44, card45, card46, card47, card48, card49, card50, card51, card52, card53, card54, card55, card56, card57, card58, card59, card60, card61, card62, card63, card64, card65, card66, card67, card68, card69, card70, card71, card72, card73, card74, card75, card76, card77, card78, card79, card80, card81];

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

// var chosen = [card1, card2, card3];

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

// toggles the selected state of a card object
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
