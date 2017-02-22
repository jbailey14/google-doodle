// YOUR SCRIPTS GO HERE

// Store 3 images
var img0 = '../img/200.jpf';
var img1 = '../img/300.jpf';
var img2 = '../img/400.jpf';

// Get random number
var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Display random img
$('img').attr('src', eval('img' + numRand) );

