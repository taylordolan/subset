
var cards = document.getElementById("cards");
var scoreBox = document.getElementById("score");
var selectedCards = 0;
var score = 0;
var deck = [];

function removeSelectedCards() {
    var chosenCards = document.getElementsByClassName("selected");
    var numChosenCards = chosenCards.length;
    var parent = chosenCards[0].parentNode;
    for (i=0; i<numChosenCards; i++) {
        deck.push(chosenCards[i])
    }
    for (i=0; i<numChosenCards; i++) {
        parent.removeChild(chosenCards[0]);
    }
    for (i=0; i<deck.length; i++) {
        card = deck[i];
        card.classList.remove("selected");
    }
}

function createCard(n) {
    var card = document.createElement("div");
    var number = document.createElement("p");
    card.classList.add("card");
    if (Math.random()<0.5)
        card.classList.add("styleA");
    else
        card.classList.add("styleB");
    number.innerHTML = n;
    card.appendChild(number);
    return card;
}

for (i=0;i<81;i++) {
    deck.push(createCard(i));
}

function dealCards(n) {
    for(i=0; i<n; i++) {
        position = Math.floor(Math.random()*deck.length)
        cards.appendChild(deck[position]);
        deck.splice(position, 1);
    }
}

function deselectAllCards() {
    for (var i=0; i<cards.children.length; i++) {
        cards.children[i].classList.remove("selected");
        selectedCards = 0;
    }
}

function doSelectedCardsMatch() {
    var selectedCards = document.getElementsByClassName("selected");
    var matched = 0;
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

dealCards(12);

document.body.onclick = function(e) {
    
    if (e.target.classList.contains("card")) {
        var card = e.target
        if (!card.classList.contains("selected")) {
            selectedCards++;
        } else {
            selectedCards--;
        }

        card.classList.toggle("selected");

        if (selectedCards === 3) {
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

