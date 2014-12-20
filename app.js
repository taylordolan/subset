
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
        selectedCards = 0;
    }
}

setUp();

// function clearOnCondition() {
//     if (selectedCards === 3) {
//         selectedCardsMatch();
//         clearSelected();
//         scoreBox.innerHTML = score;
//     }
// }

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

document.body.onclick = function(e) {
    
    if (e.target.classList.contains("card")) {
        var card = e.target
        if (!card.classList.contains("selected"))
            selectedCards++;
        card.classList.toggle("selected");

        if (selectedCards === 3) {
            if (doSelectedCardsMatch()) {
                setTimeout(removeSelectedCards, 500);
                score++;
                scoreBox.innerHTML = score;
                setTimeout(dealCards(3), 1500);
            } else {
                setTimeout(clearSelected, 500);
            }
            selectedCards = 0;
        }
    }
}

// var state = {}
// state.whatever // "Things!"
// state.card = function() {
//     return "Card!"
// }
// state.card // function(){}
// state.card() // "Card!"
// state.deck = []
// state.deck = (function(){
//     var ret = []
//     for (var i = 0; i < 5; i++){
//         ret.push(state.card());
//     }
//     return ret;
// }());

// state.deck // 

// function registerDocumentClickable(func, key) {
//     state.document_clickables = state.document_clickables ? state.document_clickables : {};
//     state.document_clickables[key] = func;
// }


// document.body.onclick = whatDoINameYou;

// function whatDoINameYou() {
    // document.body.onclick = function(eventObject) {
    //     for (var key in state.document_clickables){
    //         state.document_clickables[key](eventObject);
    //     }
    // }

    // function cardClick(clickEventObject) {
    //     var target = clickEventObject.target;
    //     if (target.classList.contains("card")) {
    //         toggleSelectedState(target);
    //     }
    // }

    // function someOtherClickThing(clickEventObject) {
    //     // do something else here.
    //     console.log(clickEventObject);
    // }

    // registerDocumentClickable(someOtherClickThing, "someOtherClickThing");
    // registerDocumentClickable(cardClick, "cardClick");

// }

// document.body.onclick([ native code that outputs the event object]);


// whatDoINameYou();

