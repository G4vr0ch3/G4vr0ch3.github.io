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


// Socials effect


window.onscroll = function() {
    var socials = document.querySelector('.socials');

    if (window.pageYOffset > window.innerHeight) {

        socials.style.border = "none"

        socials.querySelector('h1').style.opacity = 0

        var ul = socials.querySelector('ul')

        ul.style.display = "grid"
        ul.style.gridTemplateColumns = "repeat(2, 5vh)"
        ul.style.gridTemplateRows= "repeat(2,5vh)"
        ul.style.gap = "1vh"
        ul.style.border = "2px white solid"
        ul.style.borderRadius = "15px"
        ul.style.height = "fit-content"
        ul.style.width = "fit-content"
        ul.style.padding = "2vh"

        socials.querySelectorAll('li').forEach(item => {
            item.style.border = "none"
            item.style.margin = "0"
        })

        
        socials.style.position = "fixed"
        socials.style.top = "10vh"
        socials.style.right = "5vh"


    } else {
        socials.style.border = "2px white solid"

        socials.querySelector('h1').style.opacity = 1

        var ul = socials.querySelector('ul')

        ul.style.display = "flex"
        ul.style.border = "none"

        socials.querySelectorAll('li').forEach(item => {
            item.style.border = "2px white solid"
            item.style.margin = "3vh"
        })

        socials.style.position = "relative"
        socials.style.top = "20vh"

    }
}


/*

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

*/