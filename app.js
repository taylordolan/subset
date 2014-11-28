
var cards = document.getElementById("cards");
var selectedCards = 0;

function clearSelected() {
    for (var i=0; i<cards.children.length; i++) {
        cards.children[i].style.borderWidth = "1px";
        selectedCards = 0;
    }
}

clearSelected();

function clearOnCondition() {
    if (selectedCards === 3) {
        clearSelected();
    }
}

function toggleSelectedState() {
    if (this.style.borderWidth === "1px") {
        this.style.borderWidth = "3px";
        selectedCards++;
    } else {
        this.style.borderWidth = "1px";
        selectedCards--;
    }
    setTimeout(clearOnCondition, 1250);
}

for (var i=0; i<cards.children.length; i++) {
    cards.children[i].onclick = toggleSelectedState;
}