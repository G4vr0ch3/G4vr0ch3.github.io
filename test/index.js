// Get a reference to the <path>
var path = document.querySelector('#star-path');

// Get length of path... ~577px in this case
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
    if (window.pageYOffset >= window.innerHeight) {
        var scrollPercentage = (document.body.scrollTop - window.innerHeight) / (document.body.scrollHeight - 2*window.innerHeight);
    } else {
        scrollPercentage = 0 ;
    } ;
  
    console.log(scrollPercentage)

    var drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;

    if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";

    } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    } 
});
