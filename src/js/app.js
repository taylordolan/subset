var cards = document.getElementsByClassName("cards")[0];
var scoreBox = document.getElementById("score");
var discard = [];
var table = [];
var selectedCards = [];
var score = 0;

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
      return "2";
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
      return "circle";
      break;
    case 2:
      return "curve";
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
  // card.innerHTML  = "" + count + " " + fill + " " + color + " " + shape;
  switch (count) {
    case "1":
      card.appendChild(document.createElement("div"));
      break;
    case "2":
      card.appendChild(document.createElement("div"));
      card.appendChild(document.createElement("div"));
      break;
    case "3":
      card.appendChild(document.createElement("div"));
      card.appendChild(document.createElement("div"));
      card.appendChild(document.createElement("div"));
      break;
  }
  switch (color) {
    case "red":
      card.classList.add("red");
      break;
    case "green":
      card.classList.add("green");
      break;
    case "purple":
      card.classList.add("purple");
      break;
  }
  switch (fill) {
    case "solid":
      card.classList.add("solid");
      break;
    case "empty":
      card.classList.add("empty");
      break;
    case "shaded":
      card.classList.add("shaded");
      break;
  }
  switch (shape) {
    case "circle":
      card.classList.add("circle");
      break;
    case "curve":
      card.classList.add("curve");
      break;
    case "squiggle":
      card.classList.add("squiggle");
      break;
  }
  card.classList.add("card");
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

function deselectAllCards() {
  for (var i=0; i<cards.children.length; i++) {
    cards.children[i].classList.remove("selected");
    selectedCards = 0;
  }
}

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
    console.log("error setting 'selected' value for given object");
  }
}

// takes an element and removes all classes from it
function removeAllClasses(e) {
  for (var i=0; i<e.classList.length; i++) {
    e.classList.remove(e.classList[i]);
  }
}

// applies classes to body based on the width/height proportion of the viewport
function applyClassForViewportSize() {
  var body = document.body;
  var proportion = window.innerWidth / window.innerHeight;
  removeAllClasses(body);
  if (proportion <= 0.333) {
    body.classList.add("size-1");
  } else if (proportion <= 0.55) {
    body.classList.add("size-2");
  } else if (proportion <= 0.75) {
    body.classList.add("size-3")
  } else if (proportion <= 1.2) {
    body.classList.add("size-4")
  } else if (proportion <= 1.33) {
    body.classList.add("size-5")
  } else if (proportion <= 3) {
    body.classList.add("size-6")
  } else {
    body.classList.add("size-7")
  }
}

// SET UP

applyClassForViewportSize();
dealCards(12);
renderTable(table);

// END SET UP

window.onresize = applyClassForViewportSize;

document.body.onclick = function(e) {

  if (e.target.classList.contains("card")) {

    var clickedObject = matchCardElementToObject(e.target,table);

    // toggles selected state of the card object that corresponds to the clicked dom element
    toggleSelected(clickedObject);

    console.log(clickedObject.id);

    // clears selectedCards array
    while(selectedCards[0]) {
      selectedCards.pop(selectedCards[0]);
    }
    // loops through table and adds cards with "selected: true" to selectedCards
    for (var i=0; i<table.length; i++) {
      card = table[i];
      if (card.selected === true) {
        selectedCards.push(card);
      }
    }

    renderTable(table);

    if (selectedCards.length === 3) {

      if (checkForMatch(selectedCards)) {
        console.log("it's a match!");
        // for every selected card…
        for (var i=0; i<selectedCards.length; i++) {
          // loop through table[]…
          for (var j=0; j<table.length; j++) {
            // if the selected card id matches the table card id…
            if (selectedCards[i].id == table[j].id) {
              // move the card from table to discard
              discard.push(table[j]);
              table.splice(j,1);
            }
          }
        }
        dealCards(3);
        if (deck.length === 0) {
          while (discard.length) {
            var position = Math.floor(Math.random()*discard.length)
            deck.push(discard[position]);
            discard.splice(position, 1);
          }
        }
      } else {
        console.log("not a match");
      }
      // deselects all cards in table
      for (var i=0; i<table.length; i++) {
        table[i].selected = false;
      }
      // clears selectedCards array
      while(selectedCards[0]) {
        selectedCards.pop(selectedCards[0]);
      }
      setTimeout(function(){renderTable(table)}, 400);
    }
  }
}
