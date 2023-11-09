// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.children('ul').children().css('background','white')
// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.children().eq(3).children().eq(0).text("O")
console.log(rootEl.children().eq(3).children().eq(0))

// or 
// Select the last `<ul>` or the third row.
// Long traverals can be segmented to provide better readability.

//var rowThree = rootEl.children('ul').eq(2);

// Select the children of the `<ul>`, then select the first box and add the 'O'.

//rowThree.children().eq(0).text('O');