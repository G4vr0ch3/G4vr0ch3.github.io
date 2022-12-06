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

function discover(){
    document.querySelectorAll('.floater').forEach(floater => {
        floater.style.transform = `translateY(-100vh)`;
    })
    location.href ='#About'
}

// Socials effect

window.onscroll = function() {

    if (window.pageYOffset == 0) {
        document.querySelectorAll('.floater').forEach(floater => {
            var delay = Math.random()*2;
            floater.style.transition = `${delay}s`;
            floater.style.transform = `translateY(0)`;
        })
    }

    if (window.pageYOffset > window.innerHeight/10) {
        document.getElementById('Whoami').style.transform = 'translateX(0)'
        document.querySelectorAll(".social_item" ).forEach(item => {
            item.style.transform = 'translateY(0)'
        })
    }

    var ul = document.getElementById('social_list')

    if (window.pageYOffset > window.innerHeight && window.innerWidth > 550) {

        console.log('up')

        $('.Socials').css("opacity", 0)

        ul.style.display = "grid"
        ul.style.gridTemplateColumns = "repeat(2, 5vh)"
        ul.style.gridTemplateRows = "repeat(2,5vh)"
        ul.style.gap = "1vh"
        ul.style.border = "2px white solid"
        ul.style.borderRadius = "15px"
        ul.style.height = "fit-content"
        ul.style.width = "fit-content"
        ul.style.padding = "2vh"

        ul.querySelectorAll('li').forEach(item => {
            item.style.border = "none"
            item.style.margin = "0"
            item.style.backgroundColor = "black"

            item.querySelector("a").style.color = "white"

        })

        document.getElementById('SiteMap').prepend(ul)

        $('.SiteMap').css("opacity", 1)

    } else if (window.innerWidth > 550) {

        $('.SiteMap').css("opacity", 0)
  
        ul.style.display = "flex"
        ul.style.border = "none"

        ul.querySelectorAll('li').forEach(item => {
            item.style.border = "2px white solid"
            item.style.margin = "3vh"
            item.style.margin = "0"
            item.style.backgroundColor = "white"

            item.querySelector("a").style.color = "black"
        })

        document.getElementById('Socials').prepend(ul)

        $('.Socials').css("opacity", 1)

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