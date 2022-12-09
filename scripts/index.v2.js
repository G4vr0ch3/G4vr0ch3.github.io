var window_height = window.innerHeight;
var cmd_filed = false;

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

// Terminal functions

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

// Discover effect

function discover(){
    document.querySelectorAll('.floater').forEach(floater => {
        floater.style.transform = `translateY(-100vh)`;
    })
    location.href ='#About'
}

// Scroll effects

window.onscroll = async function() {

    // Whoami translation

    if (window.pageYOffset == 0) {
        document.querySelectorAll('.floater').forEach(floater => {
            var delay = Math.random()*2;
            floater.style.transition = `${delay}s`;
            floater.style.transform = `translateY(0)`;
        })
    }

    // Navigation bar

    if (window.pageYOffset > window.innerHeight/10) {
        document.getElementById('Whoami').style.transform = 'translateX(0)'
        document.querySelectorAll(".social_item" ).forEach(item => {
            item.style.transform = 'translateY(0)'
        })
    }

    if (window.pageYOffset > 1.1*window.innerHeight && window.innerWidth > 550) {
        $('.SiteMap').css("opacity", 1)
    } else if (window.innerWidth > 550) {

        $('.SiteMap').css("opacity", 0)
    }

    if (window.pageYOffset >= window.innerHeight && !cmd_filed) {

        var cmd = "whoami"

        cmd_filed = true

        const cmd_letters = cmd.split("");
        let i = 0;
        while(i < cmd_letters.length) {
            await waitForMs(100);
            $('#cmd').append(cmd_letters[i]);
            i++
        }

        await waitForMs(200);

        $('.input-cursor').css('animation', 'none')
        $('.input-cursor').css('opacity', '0')

        var r_lines = document.querySelectorAll('.r_line')
        var emo = document.querySelectorAll('.term_emo')
        
        i = 0;
        while(i < r_lines.length) {
            console.log(r_lines[i])
            r_lines[i].style.opacity = "1";
            emo[i].style.opacity = "1";
            await waitForMs(200);
            i++
        }

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