var window_height = window.innerHeight;

// Loader

$(window).on('load', function () {
    $('.loader-wrapper').fadeOut("slow");
    $('.Welcome').css("opacity", 1);
})

// Parallax Effect

document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/500
        const y = (window.innerHeight - e.pageY*speed)/500

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`

    });
}

// Discover effect

window.onscroll = function() {
    if (window.pageYOffset == 0) {
        document.querySelectorAll('.floater').forEach(floater => {
            var delay = Math.random()*2;
            floater.style.transition = `${delay}s`;
            floater.style.transform = `translateY(0)`;
        })
    }
}

function discover(){
    document.querySelectorAll('.floater').forEach(floater => {
        floater.style.transform = `translateY(-100vh)`;
    })
    location.href ='#About'
}

var path = document.querySelector('#line-path');
var pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;
path.getBoundingClientRect();

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