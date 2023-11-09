// Comments show the vanilla JavaScript equivalent statements
// Jquery can minimize the syntax of Javascript

// var rootEl = document.getElementById("root");
var rootEl = $('#root');

// var titleEl = document.createElement("h1");
var titleEl = $('<h1>');

// titleEl.textContent = "Hello friends";
titleEl.text('Hello friends');

// titleEl.className = 'fancy';
titleEl.attr('class', 'fancy');

// titleEl.classList.add('p-5') - (`p-5` is for padding)
titleEl.addClass('p-5');

// titleEl.style.border = "rgb(122, 242, 242) 3px solid";
titleEl.css('border', 'rgb(122, 242, 242) 5px solid');

// rootEl.appendChild(titleEl);
rootEl.append(titleEl);

// titleEl.append("Welcome to jQuery");
rootEl.append('<h2>With jQuery we can:</h2>');

/*  var listEl = document.createElement("ol");  create or getid i html
    var li1 = document.createElement("li");
    listEl.appendChild(li1);
*/    

var abilities = [
  'Select',
  'Create',
  'Style',
  'Animate',
  'Traverse',
  'Event Listen',
  'much more',
];

for (var i = 0; i < abilities.length; i++) {
  // Create a new `<li>` for each ability and its text content
  var abilityEl = $('<li>');

  // abilityEl.textContent = abilities[i];
  abilityEl.text(abilities[i]);

  // `my-3` class adds margin on top and bottom
  abilityEl.addClass('my-3');

  // Alternatively
  // var abilityEl = $("<li>" + abilities[i] + "</li>");

  // Add this new `<li>` to the `<div>` root element.
  rootEl.append(abilityEl);
}

// select all `<li>` elements on the page
// document.querySelectorAll('li');
console.log($('li'));

// Alternatively use the `$.each` method
// $.each(abilities, function(i, ability) {
//    rootEl.append("<li>" + ability + "</li>");
// })

