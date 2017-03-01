// YOUR SCRIPTS GO HERE

// Store 3 images
var img0 = '../img/tron1.jpg';
var img1 = '../img/tron2.jpg';
var img2 = '../img/tron3.jpg';
var img3 = '../img/tron4.jpg';
var img4 = '../img/tron5.jpg';

// Get random number
var max = 5;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Display random img
$('#random').attr('src', eval('img' + numRand) );

// Draw SVG
var myLine = $('svg').drawsvg({
    duration: 3000,
  reverse: true
  
});

myLine.drawsvg('animate');