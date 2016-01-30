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
