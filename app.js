
var cards = document.getElementById("cards");
var selectedCards = 0;

function clearSelected() {
    for (var i=0; i<cards.children.length; i++) {
        cards.children[i].style.backgroundColor = "rgb(100, 100, 100)";
        selectedCards = 0;
    }
}

clearSelected();

function clearCondition() {
    if (selectedCards === 3) {
        clearSelected();
        // console.log("should clear now");
    }
}

function toggleCard() {
    if (this.style.backgroundColor === "rgb(100, 100, 100)") {
        this.style.backgroundColor = "rgb(90, 90, 90)";
        // setTimeout(function(){selectedCards++}, 1000);
        selectedCards++;
    } else {
        this.style.backgroundColor = "rgb(100, 100, 100)";
        selectedCards--;
    }
    setTimeout(clearCondition,1250);
}

for (var i=0; i<cards.children.length; i++) {
    cards.children[i].onclick = toggleCard;
}