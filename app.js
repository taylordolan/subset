
var cards = document.getElementById("cards");
var selectedCards = 0;

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
        clearSelected();
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