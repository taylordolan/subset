
var cards = document.getElementById("cards");
var selectedCards = 0;
var score = 0;
var scoreBox = document.getElementById("score");

function setUp() {
    for (var i=0; i<cards.children.length; i++) {
        var card = cards.children[i];
        card.classList.add("unselected");
        if (Math.random()<0.5) {
            card.classList.add("styleA");
        } else {
            card.classList.add("styleB");
        }
    }
}

function removeSelectedCards() {
    var selectedCards = document.getElementsByClassName("selected");
    var numSelectedCards = selectedCards.length;
    var parent = selectedCards[0].parentNode;

    for (i=0; i<numSelectedCards; i++) {
        parent.removeChild(selectedCards[0]);
    }
}

function dealCards(times) {
    for (i=0;i<times;i++) {
        createCard();
    }
}

function createCard() {
    var table = document.getElementById("cards");
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("unselected");

    if (Math.random()<0.5) {
            card.classList.add("styleA");
        } else {
            card.classList.add("styleB");
        }


    table.appendChild(card);

}

function clearSelected() {
    for (var i=0; i<cards.children.length; i++) {
        cards.children[i].classList.remove("selected");
        cards.children[i].classList.add("unselected");
        selectedCards = 0;
    }
}

setUp();

function clearOnCondition() {
    if (selectedCards === 3) {
        checkIfMatched();
        clearSelected();
        scoreBox.innerHTML = score;
    }
}

function checkIfMatched() {
    var setOfCards = document.getElementsByClassName("selected");
    var matched = 0;
    if (setOfCards[0].classList.contains("styleA")) {
        for (var i=0; i<setOfCards.length; i++) {
            if (setOfCards[i].classList.contains("styleA")) {
                matched++;
            }
        }
    } else if (setOfCards[0].classList.contains("styleB")) {
        for (var i=0; i<setOfCards.length; i++) {
            if (setOfCards[i].classList.contains("styleB")) {
                matched++;
            }
        }
    } else {
        console.log("hey there's an error");
    }
    
    if (matched == 3) {
        score++;
    }
}

function toggleSelectedState() {
    if (this.classList.contains("unselected")) {
        selectedCards++;
    }
    this.classList.toggle("unselected");
    this.classList.toggle("selected");

    setTimeout(clearOnCondition, 1250);
}

for (var i=0; i<cards.children.length; i++) {
    cards.children[i].onclick = toggleSelectedState;
}
