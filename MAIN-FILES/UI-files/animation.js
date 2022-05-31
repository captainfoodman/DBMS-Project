// const intro=document.querySelector('#sec-2');
// const video=intro.querySelector("video");
// const text= intro.querySelector("h1");

// const section = document.querySelector("#sec-3");
// const end = section.querySelector("h1");

// const controller = new ScrollMagic.Controller();

// const scene= new ScrollMagic.scene({
//     duration: 1000,
//     triggerElemnt: intro,
//     triggerHook:0
// })
// .addIndicators()
// .addTo(controller);

// window.addEventListener("scroll", function(){
//     var ele = document.querySelector("#video-text");
//     var position = ele.getBoundingClientRect();

//     if(position.top >= 0 && position.bottom <= window.innerHeight) {
//         document.getElementById("video-text").style.opacity = 1;
// 		// alert('Element is fully visible in screen');
// 	}

// 	// checking for partial visibility
// 	if(position.top < window.innerHeight && position.bottom >= 0) {
// 		// alert('Element is partially visible in screen');
//         document.getElementById("video-text").style.opacity = 0;
// 	}
// });
//For the video to auto play
var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        // alert('Element is fully visible in screen');
        // document.getElementById("video-file").style.position = 'absolute';
        document.getElementById("video-file").play();
    }
    if(entries[0].isIntersecting === false){
        // alert('Element is fully visible in screen');
        document.getElementById("video-file").pause();
        
    }
		
}, { threshold: [0.4] });

observer.observe(document.querySelector("#video-file"));

//For the video to auto play

//for the text to fade in

//for p4

var text_fade_2 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        
        document.getElementById("p3").style.opacity=0.4;
        document.getElementById("p4").style.opacity=1;
    }
    if(entries[0].isIntersecting === false){
        
        document.getElementById("p4").style.opacity=0.4;
        document.getElementById("p3").style.opacity=1;
        
        
    }
		
}, { threshold: [1] });

text_fade_2.observe(document.querySelector("#ref"));
//for p4

//for p3

var text_fade_2 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        
        document.getElementById("p2").style.opacity=0.4;
        document.getElementById("p3").style.opacity=1;
    }
    if(entries[0].isIntersecting === false){
        
        document.getElementById("p3").style.opacity=0.4;
        document.getElementById("p2").style.opacity=1;
        
        
    }
		
}, { threshold: [1] });

text_fade_2.observe(document.querySelector("#p4"));
//for p3

//for p2

var text_fade_2 = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        
        document.getElementById("p1").style.opacity=0.4;
        document.getElementById("p2").style.opacity=1;
    }
    if(entries[0].isIntersecting === false){
        
        document.getElementById("p2").style.opacity=0.4;
        document.getElementById("p1").style.opacity=1;
        
        
    }
		
}, { threshold: [0.7] });

text_fade_2.observe(document.querySelector("#p3"));
//for p2

//for p1
var text_fade = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        
        document.getElementById("p1").style.opacity=1;
    }
    if(entries[0].isIntersecting === false){
        
        document.getElementById("p1").style.opacity=0.4;
        
    }
		
}, { threshold: [0.4] });

text_fade.observe(document.querySelector("#p2"));

//for p1

//for the text to fade in

//for the sections to pop up

var text_fade = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        
        document.getElementById("sec-2").style.height='90%';
        document.getElementById("sec-2").style.width='90%';
        document.getElementById("sec-2").style.borderRadius='32px';
    }
    if(entries[0].isIntersecting === false){
        
        document.getElementById("sec-2").style.height='85%';
        document.getElementById("sec-2").style.width='85%';
        document.getElementById("sec-2").style.borderRadius='30px';
        
    }
		
}, { threshold: [0.6] });

text_fade.observe(document.querySelector("#sec-2"));

//for the div to move from the sides

var div_slide = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        
        // document.getElementById("left-p1").style.transitionDuration=1;
        // document.getElementById("left-p2").style.transitionDuration=2;
        // document.getElementById("left-p3").style.transitionDuration=2.8;

        document.getElementById("left").style.transform="translateX(0%)"
        document.getElementById("left-p1").style.transform="translateX(0%)"
        document.getElementById("left-p1").style.opacity=1;
        document.getElementById("gmap").style.opacity=1;

        document.getElementById("left-p2").style.transform="translateX(0%)"
        document.getElementById("left-p2").style.opacity=1;

        document.getElementById("left-p3").style.transform="translateX(0%)"
        document.getElementById("left-p3").style.opacity=1;
    }
    if(entries[0].isIntersecting === false){
        

        // document.getElementById("left-p1").style.transitionDuration=4;
        // document.getElementById("left-p2").style.transitionDuration=3;
        // document.getElementById("left-p3").style.transitionDuration=2;


        document.getElementById("left").style.transform="translateX(-80%)"
        document.getElementById("left-p1").style.transform="translateX(-10%)"
        document.getElementById("left-p1").style.opacity=0;
        document.getElementById("gmap").style.opacity=0;

        
        document.getElementById("left-p2").style.transform="translateX(-20%)"
        document.getElementById("left-p2").style.opacity=0;

        
        document.getElementById("left-p3").style.transform="translateX(-30%)"
        document.getElementById("left-p3").style.opacity=0;
        
    }
		
}, { threshold: [0.6] });

div_slide.observe(document.querySelector("#sec-4"));